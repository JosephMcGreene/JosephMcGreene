class Hexagon {
  constructor (radius) {
    this.radius = radius,
    this.angle = 2 * Math.PI / 6,
    // this.xPos = (-radius - 5),
    this.xPos = 50,
    this.yStart = Math.floor(Math.random() * Math.floor(600) + 1),
    this.dirX = 2,
    this.dirY = -0.5
  }

  draw() {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      ctx.lineTo(this.xPos + this.radius * Math.cos(this.angle * i),
        this.yStart + this.radius * Math.sin(this.angle * i));
    }
    ctx.closePath();
    ctx.stroke();

    ctx.fillStyle = 'black';
    ctx.fill();
  }

}