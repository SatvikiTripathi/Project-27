
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var ball1, ball2, ball3, ball4, ball5, roofObj;
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObj=new roof(width/2,height/4,width/5,20);

	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	
	ball1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	ball2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	ball3=new bob(startBobPositionX,startBobPositionY,bobDiameter);
	ball4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	ball5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	
	
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});


	rope1=new rope(ball1.body,roofObj.body,-bobDiameter*2, 0)

	rope2=new rope(ball2.body,roofObj.body,-bobDiameter*1, 0)
	rope3=new rope(ball3.body,roofObj.body,0, 0)
	rope4=new rope(ball4.body,roofObj.body,bobDiameter*1, 0)
	rope5=new rope(ball5.body,roofObj.body,bobDiameter*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObj.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45});

  	}
}


function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}






