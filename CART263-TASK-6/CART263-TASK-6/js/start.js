window.onload = go_all_stuff;
let analyser;
let dataArray;
// Highlight color of the stroke of each shape
let highlightColor = "#00ff26";
async function go_all_stuff() {
    console.log("go");
    // Get Microphone input
    await getMicrophoneInput();
    /* for loading the video */
    let videoEl = document.getElementById("video-birds");
    window.addEventListener("click", function () {
        if (videoEl.currentTime === 0) {
            videoEl.play()
        }
    })


    videoEl.loop = true;

    let theCanvases = document.querySelectorAll(".canvases");
    let theContexts = [];
    //add a context for each canvas and put into an array

    for (let i = 0; i < theCanvases.length; i++) {
        let context = theCanvases[i].getContext("2d");
        theContexts.push(context);
    }
    /**
     * Circle display
     */
    let drawingBoardA = new DrawingBoard(theCanvases[0], theContexts[0], theCanvases[0].id);
    //add a circular object to canvas A
    let newCirc = new CircularObj(100, 100, 10, "#FFC300", "#E6E6FA", drawingBoardA.context)
    newCirc.assignSpeed();
    drawingBoardA.addObj(newCirc)
    drawingBoardA.display(drawingBoardA.drawingBoardId);



    let drawingBoardB = new DrawingBoard(theCanvases[1], theContexts[1], theCanvases[1].id);
    //add a rectangular object to canvas B
    drawingBoardB.addObj(new RectangularObj(50, 200, 50, 70, "#FF5733", "#E6E6FA", drawingBoardB.context)); // bass
    drawingBoardB.addObj(new RectangularObj(150, 200, 50, 70, "#33FF57", "#E6E6FA", drawingBoardB.context)); // mid
    drawingBoardB.addObj(new RectangularObj(250, 200, 50, 70, "#3357FF", "#E6E6FA", drawingBoardB.context)); // treble
    drawingBoardB.display();


    let drawingBoardC = new DrawingBoard(theCanvases[2], theContexts[2], theCanvases[2].id);
    //add a freestyle object to canvas C
    drawingBoardC.addObj(new FreeStyleObj(10, 100, 300, "#CF9FFF", "#CF9FFF", drawingBoardC.context))
    drawingBoardC.display();

    let drawingBoardD = new DrawingBoard(theCanvases[3], theContexts[3], theCanvases[3].id);
    drawingBoardD.addObj(new VideoObj(0, 0, 400, 300, videoEl, drawingBoardD.context))
    drawingBoardD.display();

    /*** RUN THE ANIMATION LOOP  */
    window.requestAnimationFrame(animationLoop);

    function animationLoop() {
        /*** CALL THE EACH CANVAS TO ANIMATE INSIDE  */
        let freq = getFrequencies();

        drawingBoardA.animate();
        drawingBoardB.animate(freq);
        drawingBoardC.animate();
        drawingBoardD.run(videoEl)
        window.requestAnimationFrame(animationLoop);
    }

    window.addEventListener("keydown", function (e) {
        drawingBoardA.keyDown(e);
        drawingBoardB.keyDown(e);
        drawingBoardC.keyDown(e);
        drawingBoardD.keyDown(e);
    })

    /**
     * Get Audio Context
     */
    async function getMicrophoneInput() {

        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        let audioContext = new AudioContext(); //using the web audio library
        try {
            //returns a MediaStreamAudioSourceNode.
            let audioStream = await navigator.mediaDevices.getUserMedia({
                audio: true,
            });
            // console.log(audioStream)
            //pass the microphone input to the web audio API
            let microphoneIn = audioContext.createMediaStreamSource(audioStream);
            // console.log(microphoneIn);

            const filter = audioContext.createBiquadFilter();
            analyser = audioContext.createAnalyser();
            analyser.fftSize = 256;
            console.log(analyser);
            // microphone -> filter ->  analyzer->destination
            microphoneIn.connect(filter);
            //use the analyzer object to get some properties ....
            filter.connect(analyser);

            const bufferLength = analyser.frequencyBinCount;
            dataArray = new Uint8Array(bufferLength);

        }
        catch (err) {
            /* handle the error */
            console.log("had an error getting the microphone");
        }
    }

    function getFrequencies() {

        if (!analyser || !dataArray) {
            return { bass: 0, mid: 0, treble: 0 };
        }

        analyser.getByteFrequencyData(dataArray);

        let bass = 0;
        let mid = 0;
        let treble = 0;

        let bassCount = 0;
        let midCount = 0;
        let trebleCount = 0;

        for (let i = 0; i < dataArray.length; i++) {

            if (i < dataArray.length * 0.2) {  // low frequencies
                bass += dataArray[i];
                bassCount++;
            }

            else if (i < dataArray.length * 0.6) { // mid frequencies
                mid += dataArray[i];
                midCount++;
            }

            else { // high frequencies
                treble += dataArray[i];
                trebleCount++;
            }
        }

        return {
            bass: bass / bassCount,
            mid: mid / midCount,
            treble: treble / trebleCount
        };
    }

    /** TASK 1:(Drawing Board A) - 
     *  1: animate the circle object(s) somehow/anyhow.. (there may be more than one)
     * You can use the mouse coordinates - the canvas ALREADY has event listeners for mouse click and mouse move
     * implemeneted, as well as the proper mouseX and mouseY (NO need to add)
     * -> ensure that any properties that are changed by the circle object occur in the update method already provided,
     * and use the member properties provided (you may add new ones ... or not :)
     * 
     * 2: add new circle objects (different sizes, positions, colors) to the canvas (board A) using some form of user interaction
     * 3: remove new circle objects from the canvas (board A) using some other form of user interaction 
     * Please for this exercise - do not add any new shapes other than the circular object...
     * 
     */


    /** TASK 2:(Drawing Board B) - 
     *  1: Affect the rectangle by input from the microphone somehow, in real time...
     *  at least two properties of the rectangle need to update and change...
     *  2: apply some arbitrary animation to the rectangle obj (change the properties in the update method provided)
     * -> the code for the microphone has NOT been added  - you need to implement it correctly...
     *  
     */

    /** TASK 3:(Drawing Board C) - 
     *  1: Affect the free-style shape by input from the microphone somehow, in real time...
     *  at least two properties of the free-style shape need to update and change...
     *  2: apply some arbitrary animation to the free-style shape (change the properties in the update method provided)
     * -> the code for the microphone has NOT been added  - you need to implement it correctly...
     *  
     */

    /** TASK 4:(Video - recorded - )
     * // add filters or manipulate the pixels... take user input from the boxes..
     *  1: using thr provided VideoObj class - > 
     * you will see all the code needed for activating  a blur filter on the video - activate it
     * 2: Next: apply the same logic to enable the other 3 possible filters (adding the event listeners etc)
     * -> make sure to look at the input/output ranges for the values
     * 3: -> apply the context filters  to the video for the three filter options (and activate the blur as well)
     * 4: ->  using the mousemove event listener (already applied in the drawing board) - 
     * make the rectangle (over the video) - follow the mouse ... AND change color when you click on the canvas
     * USE & FILL IN THE METHODS ALREADY set out in the VideoObj class...
     * 
     * 
     * PLEASE NOTE: there will be marks taken off if you ignore the instructions ;)
     *  
     */




}