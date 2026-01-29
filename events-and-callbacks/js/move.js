// Anonymous function just like function setup but doesnt have name so it cannnot be called elsewhere on when the window is onload
window.onload = function () {
    console.log("move");

    document.querySelector("#draw-box-a").addEventListener("mousemove", mouseMoveFunction);
    // get bounding box of draw-box-a
    let rect = document.querySelector("#draw-box-a").getBoundingClientRect();

    let pointDiv = this.document.createElement("div")
    pointDiv.classList.add("point");
    document.querySelector("#draw-box-a").appendChild(pointDiv);
    function mouseMoveFunction(eventObj) {
        console.log("moving");


        // DIFFERENCE TO ENSURE COORDS ARE RELATIVE
        let offsetX = eventObj.clientX - rect.x;
        let offsetY = eventObj.clientY - rect.y;

        //this.textContent = `x: ${offsetX}, y:${offsetY}`;
        pointDiv.style.top = `${offsetY}px`;
        pointDiv.style.left = `${offsetX}px`;
    }
}

