const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 16;
canvas.height = 600;

const hexAngle = 2 * Math.PI / 6;
let radius = 0;

// function drawHexagon(x, y, hexRad) {
//   radius = hexRad;
//   ctx.beginPath();
//   const hexCenter = ctx.moveTo(x, y);

//   ctx.moveTo(x, y - hexRad);
//   let point1 = ctx.moveTo(x, y - hexRad);
//   ctx.lineTo( Math.sqrt( Math.pow(hexRad, 2) - Math.pow((hexRad / 2), 2) ), point1 + (hexRad / 2) );

//   ctx.stroke();
//   // ctx.fillStyle = 'black';
//   // ctx.fill();
// }
function drawHexagon(x, y, hexRad) {
  radius = hexRad;
  ctx.beginPath();
  ctx.rotate(30 * Math.PI / 180);

  for (var i = 0; i < 6; i++) {
    ctx.lineTo(x + radius * Math.cos(hexAngle * i), y + radius * Math.sin(hexAngle * i));
  }
  ctx.closePath();
  ctz.fillStyle = 'black';
  ctx.fill();
}

drawHexagon(200,200, 50);

