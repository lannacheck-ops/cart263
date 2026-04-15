const video = document.getElementById('video')

Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('./models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('./models'),
    faceapi.nets.faceExpressionNet.loadFromUri('./models')
]).then(startVideo)

function startVideo() {
    navigator.getUserMedia(
        { video: {} },
        stream => video.srcObject = stream,
        err => console.error(err)
    )
}

video.addEventListener('play', () => {
    const canvas = faceapi.createCanvasFromMedia(video)
    document.body.append(canvas)
    const displaySize = { width: video.width, height: video.height }
    faceapi.matchDimensions(canvas, displaySize)
    setInterval(async () => {
        // Stores the face detections
        // An array that stores each face that has been detected
        const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
        // Resizes the face detections based on the canvas size
        const resizedDetections = faceapi.resizeResults(detections, displaySize);
        // console.log(resizedDetections.face.expressions);
        // Clear the canvas 
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
        // Draw bounding box
        faceapi.draw.drawDetections(canvas, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
        // Trying to log the facial expressions in real time
        resizedDetections.forEach(face => {
            const expressions = face.expressions;

            const emotion = Object.keys(expressions).reduce((maxEmotion, currentEmotion) => {
                return expressions[currentEmotion] > expressions[maxEmotion]
                    ? currentEmotion
                    : maxEmotion;
            });
            console.log(emotion); // "happy"
        })
    }, 100)
})
// startVideo();