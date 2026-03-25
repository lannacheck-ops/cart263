class CircularObj {
  constructor(x, y, radius, f_color, s_color, context) {
    // We write instructions to set up a Flower here
    // Position and size information
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.fill_color = f_color;
    this.stroke_color = s_color;
    this.startAngle = 0;
    this.endAngle = Math.PI * 2; //full rotation
    this.context = context;
    this.vX = 0;
    this.vY = 0;
    this.dir = [1, -1];
  }

  display() {
    // console.log(this.cirArr);
    this.context.fillStyle = this.fill_color; // change the color we are using
    this.context.strokeStyle = this.stroke_color; // change the color we are using
    this.context.beginPath();
    this.context.arc(
      this.x,
      this.y,
      this.radius,
      this.startAngle,
      this.endAngle,
      true
    );
    this.context.fill(); // set the fill
    this.context.lineWidth = 2; //change stroke
    this.context.closePath();
    this.context.stroke();
  }

  assignSpeed() {
    this.vX = (Math.floor(Math.random() * (3 - 1)) + 1) * this.dir[Math.floor(Math.random() * this.dir.length)];
    this.vY = (Math.floor(Math.random() * (3 - 1)) + 1) * this.dir[Math.floor(Math.random() * this.dir.length)];
  }

  update(bounds, volume) {
    // console.log(bounds, (bounds.bottom - bounds.y), (bounds.right - bounds.x));
    this.x += this.vX;
    this.y += this.vY
    if (this.x > (bounds.right - bounds.x - this.radius)) {
      this.vX *= -1;
    } else if (this.x < (bounds.left - bounds.x + this.radius)) {
      this.vX *= -1;
    }

    if (this.y > (bounds.bottom - bounds.y - this.radius)) {
      this.vY *= -1;
    } else if (this.y < (bounds.top - bounds.y + this.radius)) {
      this.vY *= -1;
    }
  }
}
