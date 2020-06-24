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

	bob1=new Bob(320,480,40);
	bob2=new Bob(360,480,40);
	bob3=new Bob(400,480,40);
	bob4=new Bob(440,480,40);
	bob5=new Bob(480,480,40);

	roof=new Roof(400,100,800,50);

	rope1=new Rope(bob1.body,roof.body,-70,0);
	stroke("black");
	rope2=new Rope(bob2.body,roof.body,-35,0);
	stroke("black");
	rope3=new Rope(bob3.body,roof.body,0,0);
	stroke("black");
	rope4=new Rope(bob4.body,roof.body,35,0);
	stroke("black");
	rope5=new Rope(bob5.body,roof.body,70,0);
	stroke("black");
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

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

  roof.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-185,y:-185})
	}
}



