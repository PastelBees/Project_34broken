class Pendulum{
    constructor(x, y,color){
        var options = {
           'restitution': 1,
           'friction': 0,
           'frictionAir':0.0,
           'slop': 1,
           'inertia': Infinity

        }

        this.body=Bodies.rectangle(x,y,40,40,options)
        this.width = 40
        this.height = 40
        this.y = y
        this.x = x
        this.color = color
        
        World.add(world, this.body)
    }
 
display(){
    var pos=this.body.position;
    var angle= this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke()
    fill(this.color);
    ellipse(0, 0, 60, 60);
    pop();
}
}