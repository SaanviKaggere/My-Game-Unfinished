
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, boy1, boy2, boy3, boy4;

function preload(){
  boy1 = loadImage("boyRunningAnimation1.png");
  boy2 = loadImage("boyRunningAnimation2.png");
  boy3 = loadImage("boyRunningAnimation3.png");
  boy4 = loadImage("boyRunningAnimation4.png");
}


function setup() {
  createCanvas(400,400);
  background("blue");

  engine = Engine.create();
  world = engine.world;

  boy = createSprite(200,300,50,50)
  boy.addAnimation(boy1, boy2, boy3, boy4);
  
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  drawSprites();
}

