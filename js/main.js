const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let jumping = false;
let jumptimer = 0;

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
let cactus = new Cactus();
cactus.draw();

let cactusArray = [];
let timer = 0;

function animation() {
  requestAnimationFrame(animation);
  timer++;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (timer % 120 === 0) {
    const cactus = new Cactus();
    cactusArray.push(cactus);
  }

  cactusArray.forEach((a, i, o) => {
    if (a.x < 0) {
      o.splice(i, 1);
    }
    a.x--;
    a.draw();
  });
  if (jumping == true) {
    dino.y--;
    jumptimer++;
  }
  if (jumptimer > 100) {
    jumping = false;
  }
  if (jumping == false) {
    if (dino.y < 200) {
      dino.y++;
      jumptimer = 0;
    }
  }

  dino.draw();
}
animation();

document.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    jumping = true;
  }
});
