class Chain {
    constructor(b1,b2){
        var options = {
            bodyA:b1,//bodyA = 1st body to which constraint is attached
            bodyB:b2,//bodyB =2nd body to which constraint is attached
            stiffness:0.05,
            length:50
        }

    this.chain = Constraint.create(options);
    World.add(world,this.chain);

    }

    display(){
        
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position
        strokeWeight(5)
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}