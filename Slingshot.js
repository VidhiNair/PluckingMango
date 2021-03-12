class Slingshot{
    constructor(bodyA, pointB, stiff){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: stiff,
            length: 1,
            damping: 0
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        Matter.World.add(world, this.sling);
        
    }
        fly(){
        this.sling.bodyA = null; 
        }
    
    display(){
        if (this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
            stroke(0);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}