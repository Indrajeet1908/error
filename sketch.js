
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
function preload(){

}

function setup() {
	createCanvas(1000, 570);


	engine = Engine.create();
	world = engine.world;

	var ball_option = {
		isStatic:false,
		restitution:0.95,
		friction:0,
		density:1.2,
		
	}	


	//Create the Bodies Here.
	ground =new Ground(width/2,670,width,20);
    leftSide = new Ground(800,600,20,120);
	rightSide = new Ground(900,600,20,120);

	ball = Bodies.circle(100,200,20,ball_option);
	World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  
  background(51);
  Engine.update(engine);


  ground.display();
  leftSide.display();
  rightSide.display();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20)
 
  
}

function keyPressed() {
	if (keycode === UP_ARROW) {
		
		Matter.Body.applyForce(ball,
			{x:0,y:0},
			{x:0,y:-0.05}
			);

	}
}


