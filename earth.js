class Earth extends Padre{
  
  constructor(x,y){
    super(x,y);
    this.earth = loadImage("Images/earth.png");
    
  }
  
  show(){
    push();
    imageMode(CENTER);
    translate(350,300);
    scale(0.5);
    image(this.earth, this.x, this.y);
    pop();
  }
  
}