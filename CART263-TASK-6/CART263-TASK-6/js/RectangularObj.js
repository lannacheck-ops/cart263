class RectangularObj {
  constructor(x, y, w, h, f_color, s_color, context) {
    // We write instructions to set up a Flower here
    // Position and size information
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.fill_color = f_color;
    this.stroke_color = s_color;
    this.startAngle = 0;
    this.endAngle = Math.PI * 2; //full rotation
    this.context = context;
    this.rectArr = [];
  }

  display() {
    this.context.fillStyle = this.fill_color; // change the color we are using
    this.context.fillRect(this.x, this.y, this.width, this.height);
    this.context.strokeStyle = this.stroke_color; // change the color we are using
    this.context.lineWidth = 2; //change stroke
    this.context.strokeRect(this.x, this.y, this.width, this.height);
  }
  addObj(objToAdd) {
    this.cirArr.push(objToAdd);
  }

  update(freq, index) {

    if (!freq) return;

    let jump = 0;

    if (index === 0) jump = freq.bass;
    if (index === 1) jump = freq.mid;
    if (index === 2) jump = freq.treble;

    this.y = 200 - jump * 0.8;
  }
}
