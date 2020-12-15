const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;

var engine, world;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5,

function setup(){
    var canvas = createCanvas(windowWidth / 2,windowHeight / 1.5);
    engine = Engine.create();
    world = engine.world;

    let canvasmouse = Mouse.create(canvas.elt)
    canvasmouse.pixelRatio = pixelDensity()
    let options = {
        mouse: canvasmouse
    }
    mConstraint = MouseConstraint.create(engine, options)
    World.add(world, mConstraint)

    pendulum1 = new Pendulum()
}



function draw(){
    background(0);
    Engine.update(engine);


}