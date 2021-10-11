class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.Cannon_image=loadImage("./assets/canon.png")
    this.CannonBase_image=loadImage("./assets/cannonBase.png")
  }
 
  display() {
   push()
 imageMode(CENTER);
   image(this.Cannon_image,this.x,this.y,this.width,this.height);
 pop()
 image(this.CannonBase_image,70,20,200,200)
 noFill()
  }
}
