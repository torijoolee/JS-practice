let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

const dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};
dino.draw();

class Cactus {
  constructor() {
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
const cactus = new Cactus();
cactus.draw();

function animation() {
  let cactusArray = [];
  let timer = 0;

  requestAnimationFrame(animation);
  timer++;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (timer % 100 === 0) {
    const cactus = new Cactus();
    cactusArray.push(cactus);
  }
  cactusArray.forEach((a) => {
    a.x--;
    a.draw();
  });
  dino.draw();
}
animation();
