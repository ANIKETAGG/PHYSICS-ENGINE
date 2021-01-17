const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,myWorld;
var ground, ball;



function setup() {
  createCanvas(400,400);

  engine = Engine.create()
  myWorld = engine.world;

  var option = {
    isStatic:true
  }
  
  ground = Bodies.rectangle(200,390,400,20,option);
  World.add(myWorld,ground);

  ball = Bodies.circle(200,100,20,{restitution:1});
  World.add(myWorld,ball);  
  console.log(ball)
  console.log(ground)
  console.log(ground.position);
  console.log(ground.inertia)
  console.log(ground.position.x)
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
 
  fill("brown")
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  fill("red");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}