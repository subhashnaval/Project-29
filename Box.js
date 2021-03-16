class Box{
 constructor(x,y){
  var opinion = {
   'restitution':0.8,
   'friction':0.0,
   
  }
  this.body = Bodies.rectangle(x,y,30,40,opinion);
  this.height = 40;
  this.width = 30;

  World.add(world, this.body);
    }
    display(){
     var pos = this.body.position;
     var angle = this.body.angle;
     push();
     translate(this.body.position.x, this.body.position.y);
     rotate(angle);
     
     
     rectMode(CENTER);
     rect( 0, 0, this.width, this.height);
     pop();
    }
}