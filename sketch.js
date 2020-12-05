
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, roof;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width/2,height/4,width/7,20);
	bobDia = 40;

	bobObject1 = new Bob(720,400,40);
	rope1 = new Rope(bobObject1.body,roof.body,-80,0)
	bobObject2 = new Bob(760,400,40);
	rope2 = new Rope(bobObject2.body,roof.body,-40,0)
	bobObject3 = new Bob(800,400,40);
	rope3 = new Rope(bobObject3.body,roof.body,0,0)
	bobObject4 = new Bob(840,400,40);
	rope4 = new Rope(bobObject4.body,roof.body,40,0)
	bobObject5 = new Bob(880,400,40);
	rope5 = new Rope(bobObject5.body,roof.body,80,0)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  roof.display();
  bobObject1.display();
  rope1.display();
  bobObject2.display();
  rope2.display();
  bobObject3.display();
  rope3.display();
  bobObject4.display();
  rope4.display();
  bobObject5.display();
  rope5.display();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

	}
}




