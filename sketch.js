
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxside1, boxside2, boxside3;
function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boxside1 = createSprite(1000,height-50, 200, 20);
	boxside1.shapeColor=color("white");

	boxside2 = createSprite(900, height-90, 20, 100);
	boxside2.shapeColor=color("white");

	boxside3 = createSprite(1100, height-90, 20, 100);
	boxside3.shapeColor=color("white");
	
	paper = Paper(900, 500, 20, 20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



