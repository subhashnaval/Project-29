class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.08,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    //create attach & fly function
    fly(){
        this.sling.bodyA = null;
    }
     
     //attach(body){
        // this.sling.bodyA = body;
     //}
    display(){
         if(this.sling.bodyA){
             
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            //push();
            strokeWeight(2);
            stroke("turquoise");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            //pop();
         }
    }
    }