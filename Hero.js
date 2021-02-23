class Hero {
    constructor(x, y, width, height, angle) {
      var options = { 
        density: 1, 
        frictionAir: 1
    };
  
      this.x = x
      this.y = y;
      this.r = r;
      this.image=loadImage("batgirl.png");
      this.body=Bodies.circle(this.x,this.y,(this.r)/2,option)
      World.add(world, this.body);
    }
  
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  }
