class Jupiter extends Padre{
  
  constructor(x,y){
    super(x,y);
    this.jupiter = loadImage("Images/jupiter.png");
    this.angle = 180;
    
  }
  
  show(){
    push();
    imageMode(CENTER);
    translate(300,300);
    scale(0.55);
    image(this.jupiter, this.x, this.y);
    pop();
  }
  
}