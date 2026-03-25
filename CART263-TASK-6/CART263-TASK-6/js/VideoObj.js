class VideoObj {
  constructor(x, y, w, h, videoElement, context) {
    this.videoElement = videoElement;
    this.context = context;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.shapeX = 10;
    this.shapeY = 10;
    this.shapeCol = "#000000";


    let filterButton_blur = document.getElementById("filter_button_blur");
    let blurInput = document.getElementById("blurnum");
    this.userProvidedBlur = 0;

    let filterSepia = document.getElementById("filter_button_sepia")
    let sepiaInput = document.getElementById("sepianum");
    this.userProvidedSepia = 0;

    let filterHueChange = document.getElementById("filter_button_hue")
    let hueInput = document.getElementById("huenum");
    this.userProvidedHue = 0;

    let filterInvert = document.getElementById("filter_button_invert")
    let invInput = document.getElementById("invertnum");
    this.userProvidedInv = 0;

    let self = this;


    filterButton_blur.addEventListener("click", function () {
      //get value from input field
      self.userProvidedBlur = blurInput.value;
      console.log(self.userProvidedBlur);
    });

    filterSepia.addEventListener("click", function () {
      self.userProvidedSepia = sepiaInput.value;
      console.log(self.userProvidedSepia);
    });

    filterHueChange.addEventListener("click", function () {
      self.userProvidedHue = invInput.value;
      console.log(self.userProvidedHue);
    });

    filterInvert.addEventListener("click", function () {
      self.userProvidedInv = invInput.value;
      console.log(self.userProvidedInv);
    });

  }

  display() {
    this.context.save();
    this.context.filter = `blur(${this.userProvidedBlur}px) sepia(${this.userProvidedSepia}) hue-rotate(${this.userProvidedHue}deg) invert(${this.userProvidedInv})`;
    this.context.drawImage(this.videoElement, this.x, this.y, this.w, this.h);
    this.context.fillStyle = this.shapeCol;
    this.context.fillRect(this.shapeX, this.shapeY, 50, 50)
    this.context.restore();
  }

  //called when rectangle color is to be updated
  changeColor(newCol) {
    this.shapeCol = newCol;
  }
  //called when rectangle Pos is to be updated
  updatePositionRect(mx, my) {
    this.shapeX = mx;
    this.shapeY = my;
  }
  update(videoElement) {
    this.videoElement = videoElement;
  }
}