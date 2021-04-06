const button = document.querySelector('#button');
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 16.5;
canvas.height = 600;

// let hexagon = new Hexagon(45);

function generateHex() {
  const rad = Math.floor(Math.random() * Math.floor(50) + 1);

  let hexagon = new Hexagon(rad); // see src/js/Hexagon.js

  return hexagon;
}

function animateHex() {
  ctx.clearRect(generateHex().xPos - generateHex().radius - 4,
                generateHex().yStart - generateHex().radius,
                (generateHex().radius * 2) + 2,
                generateHex().radius * 2.1);

  generateHex().draw();

  generateHex().xPos += generateHex().dirX;
  generateHex().yStart += generateHex().dirY;

  requestAnimationFrame(animateHex);
}

button.addEventListener("click", () => {
  generateHex().draw();
  animateHex();
});