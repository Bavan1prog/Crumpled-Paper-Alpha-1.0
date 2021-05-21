

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var img1,img2;

function preload()
{

	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(400,700,900,30);
	 Dust = new Dustbin(700,640,10,10);
	 Paper1 = new Paper(150,650);
   slingshot = new SlingShot(Paper1.body,{x:200, y:50});

	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Paper1.display();
  ground.display();
  Dust.display();
  slingshot.display();
  drawSprites();
 
}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(Paper1.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}




