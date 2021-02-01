
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1, bob2, bob3, bob4, bob5;
var roof,roof1,roof2,roof3;
var rope, rope1, rope2, rope3;
var stage;
function preload()
{
	stage=loadImage("download.jpg");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Ball(130,150,50);
	roof = new Ground(185,140,70,20);
	rope = new Chain(bob1.body,roof.body);
	roof1 = new Ground(205,140,70,20);
	bob2 = new Ball(180,150,50);
	rope1 = new Chain(bob2.body,roof1.body);
	roof2 = new Ground(225,140,70,20);
	bob3 = new Ball(220,150,50);
	rope2 = new Chain(bob3.body,roof2.body);
	roof3= new Ground(250,140,70,20);
	bob4 = new Ball(250,150,50);
	rope3 = new Chain(bob4.body,roof3.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(stage);

  bob1.display();
  roof.display();
  rope.display();
  bob2.display();
  bob3.display();
  bob4.display();
  rope1.display();
  rope2.display();
  rope3.display();
  roof.display();
  roof1.display();
  roof2.display();
  roof3.display();
  drawSprites();
 
}



