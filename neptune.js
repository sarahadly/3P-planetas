class Neptune extends Padre{
  
  constructor(x,y){
    super(x,y);
    this.neptune = loadImage("Images/neptune.png");
    this.angle = 180;
    
  }
  
  show(){
    push();
    imageMode(CENTER);
    translate(350,300);
    scale(0.65);
    image(this.neptune, this.x, this.y);
    pop();
  }
  
}