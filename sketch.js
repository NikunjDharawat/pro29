const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block,ground;
var slingshot,stand;



var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    BackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    block1 = new block(700,320,70,70);
    block2 = new block(920,320,70,70);
    block3 = new block(700,240,70,70);
    block4 = new block(920,240,70,70);
    block5= new block(810, 220,70,70);
    block6 =  new block(810,180,70,70);
    block7 = new block(810,160,70,70);
    block8= new block (760,120,70,70);
    block9 = new block(870,120,70,70);

   

    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    ground.display();   
    slingshot.display();    
}

function mouseDragged(){
    
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
    
       slingshot.attach(bird.polygon);
    }
}
