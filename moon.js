class Moon extends Padre{
  
  constructor(x,y){
    super(x,y);
    this.moon = loadImage("Images/moon.png");
    this.angle = 90;
    
  }
  
  show(){
    push();
    imageMode(CENTER);
    translate(350,300);
    //scale(0.1);
    image(this.moon, this.x, this.y, this.moon.width/20, this.moon.height/20);
    pop();
  }
  
  rotate(){
    push();
    rotate(this.angle);
    this.angle -= 0.7;
    pop();
  }
  
  
}