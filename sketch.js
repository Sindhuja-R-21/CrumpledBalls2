
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground;
var box1,box2,box3;
var paper,paper1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,690,800,20);
box1 = new Box(680,620,20,150);
box2 = new Box(600,670,150,150);
box3 = new Box(540,620,20,150);
paper = new Paper(100,100,30);

paper1 = new Paper(200,100,20);
	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  Engine.update(engine);
  ground.display();
 // box1.display();
  box2.display();
  //box3.display();
  paper.display();
  paper1.display();
  drawSprites();
  fill("white");
 text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:140,y:-145});
	}
	else if(keyCode===RIGHT_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:60,y:-55});
	}
}

