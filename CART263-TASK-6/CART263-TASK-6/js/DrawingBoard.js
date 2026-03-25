class DrawingBoard {
  /* Constructor */
  constructor(canvas, context, drawingBoardId) {
    this.canvas = canvas;
    this.context = context;
    this.objectsOnCanvas = [];
    let self = this;
    this.drawingBoardId = drawingBoardId;
    this.index = 0;
    this.activeCanvas = "partA";
    //each element has a mouse clicked and a mouse over
    this.canvas.addEventListener("click", function (e) {
      self.clickCanvas(e);
    });

    this.canvas.addEventListener("mousemove", function (e) {
      self.overCanvas(e);
    });

    window.addEventListener("keydown", function (e) {
      self.keyDown(e);
    });
  }

  overCanvas(e) {
    //console.log("over");
    this.canvasBoundingRegion = this.canvas.getBoundingClientRect();
    this.mouseOffsetX = parseInt(e.clientX - this.canvasBoundingRegion.x);
    this.mouseOffsetY = parseInt(e.clientY - this.canvasBoundingRegion.y);
    // console.log(this.mouseOffsetX, this.mouseOffsetY);
    // console.log(this.canvasBoundingRegion);
    //differentiate which canvas
    //you can remove the console.logs /// 
    if (this.drawingBoardId === "partA") {
      // console.log("in A")

    }
    if (this.drawingBoardId === "partB") {
      // console.log("in B")

    }
    if (this.drawingBoardId === "partC") {
      // console.log("in C")

    }
    if (this.drawingBoardId === "partD") {
      // console.log("in D")

    }
  }

  clickCanvas(e) {
    // console.log("clicked");
    this.canvasBoundingRegion = this.canvas.getBoundingClientRect();
    this.mouseOffsetX = parseInt(e.clientX - this.canvasBoundingRegion.x);
    this.mouseOffsetY = parseInt(e.clientY - this.canvasBoundingRegion.y);
    // console.log(this.activeCanvas)
    //console.log(this.mouseOffsetX, this.mouseOffsetY);

    //differentiate which canvas
    //you can remove the console.logs /// 
    if (this.drawingBoardId === "partA") {
      // console.log("in A");
      this.activeCanvas = "partA"
      let newCirc = new CircularObj(this.mouseOffsetX, this.mouseOffsetY, 10, "#FFC300", "#E6E6FA", this.context)
      newCirc.assignSpeed();
      this.addObj(newCirc)
      this.display();
      console.log(this.objectsOnCanvas.length)
      // console.log(this.canvasBoundingRegion);
      // console.log(this.objectsOnCanvas);
    }
    if (this.drawingBoardId === "partB") {
      console.log("in B")
      this.activeCanvas = "partB"
      // console.log(this.objectsOnCanvas.length)
    }
    if (this.drawingBoardId === "partC") {
      console.log("in C")
      this.activeCanvas = "partC"
    }
    if (this.drawingBoardId === "partD") {
      console.log("in D")
      this.activeCanvas = "partD"
    }
  }

  keyDown(e) {
    e.preventDefault()
    if (this.activeCanvas === "partA") {
      if (e.code === "ArrowLeft" && this.index > 0) {
        this.index -= 1;
      }
      if (e.code === "ArrowRight" && this.index < this.objectsOnCanvas.length) {
        this.index += 1;
      }
      console.log(this.index, this.objectsOnCanvas.length)
    }
  }

  /* method to add obj to canvas */
  addObj(objToAdd) {
    this.objectsOnCanvas.push(objToAdd);
  }

  /* method to add display objects on canvas */
  display() {
    for (let i = 0; i < this.objectsOnCanvas.length; i++) {
      this.objectsOnCanvas[i].display();
    }
  }

  /* method to add animate objects on canvas */
  animate() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    for (let i = 0; i < this.objectsOnCanvas.length; i++) {
      // console.log("animate")
      this.objectsOnCanvas[i].update(this.canvas.getBoundingClientRect());
      this.objectsOnCanvas[i].display();
    }
  }

  run(videoElement) {
    for (let i = 0; i < this.objectsOnCanvas.length; i++) {
      this.objectsOnCanvas[i].update(videoElement);
      this.objectsOnCanvas[i].display();
    }

  }
}
