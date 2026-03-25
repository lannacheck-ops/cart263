function mapValue(value, inMin, inMax, outMin, outMax) {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

// Map value will change the shape of the squiggly line based on the level of the mic. Louder sounds will make the line thicker and low/quiet sounds will make it smaller

// it takes the micLevel and converts it into a vlue between 0 and 255, 255 being the loudest you can get in frequency data. 
// the outMin and the outMax control the shape of the line (the curved parts) the position of the object stays the same, it just scales differently.

class FreeStyleObj {
  constructor(x, y, length, f_color, s_color, context) {
    // We write instructions to set up a Flower here
    // Position and size information
    this.x = x;
    this.y = y;
    this.fill_color = f_color;
    this.stroke_color = s_color;
    this.theta = 0;
    this.length = length;
    this.yOffset = 20;
    this.angularSpeed = .07;
    this.context = context;

  }

  display() {
    this.theta = 0; //reset everytime
    this.context.fillStyle = this.fill_color; // change the color we are using
    this.context.strokeStyle = this.stroke_color; // change the color we are using
    this.context.beginPath();
    this.context.moveTo(this.x, this.y)
    for (let i = this.x; i < this.x + this.length; i++) {
      this.context.lineTo(i, (Math.sin(this.theta) * 5) + this.y)
      this.context.lineTo(i, (Math.sin(this.theta) * 5) + this.y + this.yOffset)
      this.theta += this.angularSpeed;
    }
    this.context.stroke(); //set the stroke
  }

  update(micLevel) {
    let newYOffset = mapValue(micLevel, 0, 255, 20, 100);
    this.yOffset = newYOffset

    let newSpeed = mapValue(micLevel, 0, 255, 0.07, 0.55);
    this.angularSpeed = newSpeed;
  }
}
