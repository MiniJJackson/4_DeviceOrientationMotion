

let deltaX, deltaY;
const w = window.innerWidth;
const h = window.innerHeight;
const beginX = 15;
const beginY = 550;
let circles = [];


function setup() {
  createCanvas(800, 600);

  // For loop random circles 
  for (let i = 0; i < 20; i++) {
    circles[i] = new Circle(random(width), random(height));
  }
}

function draw() {
    background(0, 225, 255); // canvas bkgrnd

    /*
    circle(22, 500, ball.size + 10);// 1 left down

    circle(22, 500, ball.size + 10);//2 left middle
    circle(22, 500, ball.size + 10);
    circle(22, 500, ball.size + 10);
    circle(22, 500, ball.size + 10);
    circle(22, 500, ball.size + 10);
    circle(22, 500, ball.size + 10);

    
    /*
     THIS SHOULD BE A CLASS IS TOO HARD

    // START HERE
    textSize(20);
    fill('green');
    rect(0,570, 100, 30);//rect start green
    fill('255,255,0');
    text("START",0, 575, 100, 20);

 
    // WALLS
    fill(0);
    rect(100,100,10,500);//1 left
    rect(200,0,10,500);// 2 left
    rect(200,490,500,10);//1 bottom
    rect(300,380,500,10);//2 bottom
    rect(200,270,500,10);//3 bottom

    rect(690,160,10,120);//1 right bottom
    rect(600,0,10,120);//1 right top
    rect(520,160,10,120);//2 right bottom
    rect(420,0,10,120);//2 right top

    rect(310,160,10,120);//3 right bottom
    rect(310,0,10,120);//3 right top



    // END HERE
    fill('red');
    rect(210,0, 100, 30);//rect end red
    fill('255,255,0');
    text("END",210, 5, 100, 20);

    */

    // PLAY BALL
    ball.show();
    angleMode(DEGREES);
    deltaX =  map(rotationX, -30, 30, -10, 10);
    deltaY = map(rotationY, -30, 30, -10, 10);
    ball.move(deltaX,deltaY);
    fill(0);
    textAlign(CENTER);

    

 //text("(" + rotationX + " , "+ rotationY + ")", w/2,15);
}


class Ball{
  constructor(x,y,s,c){
    this.x = x;
    this.y = y;
    this.size = s;
    this.color= c;
  }
  
  show(){
    push();
    noStroke();
    fill(this.color);
    circle(this.x,this.y,this.size);
    pop();
  }

  move(xOff,yOff){
    
    this.x += xOff;
    this.y -= yOff;
    let r = this.size/2;
    if(this.x - r < 0){
        this.x = 0 + r;
    }
    if(this.x + r > width ){
      this.x = width - r;
    }
    if(this.y - r < 0){
      this.y = 0  +r;
    }
    if(this.y + r > height ){
      this.y = height - r;
    }
    
    
  }
}

class Circle{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    
    show(){
        push();
        noStroke();
        fill(0,0,0);
        circle(this.x,this.y,10);
        pop();
    }
    
}

const circle = new Circle(22, 500, circle.size + 10,"#FF0000");
const ball = new Ball(beginX,beginY,30,"#00FF00");