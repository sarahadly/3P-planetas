class Venus extends Padre{
  
  constructor(x,y){
    super(x,y);
    this.venus = loadImage("Images/venus.png");
    this.angle = 180;
    
  }
  
  show(){
    push();
    imageMode(CENTER);
    translate(350,300);
    scale(0.25);
    image(this.venus, this.x, this.y);
    pop();
  }
  
  
}