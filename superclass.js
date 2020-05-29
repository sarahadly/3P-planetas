class Padre{
  
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.sun = loadImage("Images/sun.png");
    this.angle = 90;
  }
  
  show(){
    //push();
    imageMode(CENTER);
    translate(350,300);
    scale(0.2);
    image(this.sun, this.x, this.y);
    //pop();
  }
  
  rotate(){
    //push();
    rotate(this.angle);
    this.angle += 0.5;
    //pop();
  }
  
}