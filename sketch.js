const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, stand1, stand2;
var box1, box2, box3,box4, box5, box6;
var box7, box8, box9, box10, box11, box12, box13;
var block1, block2, block3, block4;
var block5, block6, block7;
var polygon, polygon_img, slingShot;

function preload(){
polygon_img = loadImage("polygon.png");
}



function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(500,380,1000,20);
    stand1  = new Stand(550,350,250,10)
    stand2 = new Stand(850,250,170,10);
   
    
    box1 = new Box(470,320);
    box2 = new Box(500,320);
    box3 = new Box(530,320);
    box4 = new Box(560,320);
    box5 = new Box(590,320);
    box6 = new Box(620,320);
    
    box7 = new Box(500,275);
    box8 = new Box(530,275);
    box9 = new Box(560,275);
    box10 = new Box(590,275);
    box11 = new Box(530,230);
    box12 = new Box(560,230);
    box13 = new Box(545,185);
    
    block1 = new Box(800,240);
    block2 = new Box(830,240);
    block3 = new Box(860, 240);
    block4 = new Box(890, 240);
    
    block5 = new Box(830, 190);
    block6 = new Box(860, 190);
    block7 = new Box(845, 140);

    
    
    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);
    slingShot = new SlingShot(this.polygon, {x:100, y:200});

    
}


function draw(){
    background("lightyellow");
    Engine.update(engine);
    
    textSize(20);
    fill("black");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks.", 200, 50);

    ground.display();
    stand1.display();
    stand2.display();
    strokeWeight(2);
    stroke(15);
    fill("skyblue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    fill("green");
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    fill("violet");
    box11.display();
    box12.display();
    fill("yellow");
    box13.display();
    fill("red");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    fill("pink");
    block5.display();
    block6.display();
    fill("skyblue");
    block7.display();
    
    imageMode(CENTER);
    image(polygon_img, polygon.position.x, polygon.position.y, 40,40);
    
    slingShot.display();
   

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

