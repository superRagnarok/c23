const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
    box1 = new Box(210,200,50,50);
    box2 = new Box(250,150,50,60);
    ground1= new Ground(200,390,400,30);
}

function draw(){
    background(0);
    Engine.update(engine);

    console.log(box1.body.angle);
    box1.display();
    box2.display();
    ground1.display();
}