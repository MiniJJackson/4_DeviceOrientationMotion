
let deltaX, deltaY;
const w = window.innerWidth;
const h = window.innerHeight;
const beginX = w / 2;
const beginY = h / 2;

let player;
let circles = [];
let score = 0;

function setup() {
  createCanvas(w, h);
  angleMode(DEGREES);

  player = new Ball(beginX, beginY, 70, "#A020F0");

  for (let i = 0; i < 10; i++) {
    let circle = new Circle(random(width), random(height), 20, "#0000ff");
    circles.push(circle);
  }
}

function draw() {
  background(0, 225, 0);

  player.show();

  deltaX = map(rotationX, -30, 30, -10, 10);
  deltaY = map(rotationY, -30, 30, -10, 10);
  player.move(deltaX, deltaY);

  for (let i = circles.length - 1; i >= 0; i--) {
    circles[i].show();
    circles[i].move();

    if (player.hits(circles[i])) {
      circles.splice(i, 1);
      score++;
    }
  }
  

  fill(0);
  textAlign(CENTER);
  textSize(24);
  text("Score: " + score, w / 10, 40);

  if (circles.length > 0) {
    text("You win!", width / 2, height / 2);
    noLoop();
  }
}

class Ball {
  constructor(x, y, s, c) {
    this.x = x;
    this.y = y;
    this.size = s;
    this.color = c;
  }

  show() {
    push();
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.size);
    pop();
  }

  move(xOff, yOff) {
    this.x += xOff;
    this.y -= yOff;
    let r = this.size / 2;
    if (this.x - r < 0) {
      this.x = 0 + r;
    }
    if (this.x + r > width) {
      this.x = width - r;
    }
    if (this.y - r < 0) {
      this.y = 0 + r;
    }
    if (this.y + r > height) {
      this.y = height - r;
    }
  }

  hits(circle) {
    let d = dist(this.x, this.y, circle.x, circle.y);
    return d < (this.size / 2) + (circle.size / 2);
  }
}

class Circle {
  constructor(x, y, s, c) {
    this.x = x;
    this.y = y;
    this.size = s;
    this.color = c;
  }

  show() {
    push();
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.size);
    pop();
  }

  move() {
    this.x += random(-2, 2);
    this.y += random(-2, 2);
  }
}