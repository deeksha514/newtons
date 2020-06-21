var bob1,bob2,bob3,bob4,bob5,roof;
var rope1,rope2,rope3,rope4,rope5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1=new Bob(100,480,70);
	bob2=new Bob(200,480,70);
	bob3=new Bob(300,480,70);
	bob4=new Bob(400,480,70);
	bob5=new Bob(500,480,70);

	roof=new Roof(400,100,800,50);

	rope1=new Rope(bob1.body,roof.body,-70,100);
	stroke("black");
	rope2=new Rope(bob2.body,roof.body,-70,200);
	stroke("black");
	rope3=new Rope(bob3.body,roof.body,-70,300);
	stroke("black");
	rope4=new Rope(bob4.body,roof.body,-70,400);
	stroke("black");
	rope5=new Rope(bob5.body,roof.body,-70,500);
    stroke("black");
	Engine.run(engine);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();



  drawSprites();
 
}



