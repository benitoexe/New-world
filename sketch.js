const Engine=Matter.Engine; 
const Bodies=Matter.Bodies; 
const World=Matter.World; 
var engine,world; 
var ball; 
var ground;

function setup() { 
  createCanvas(400,400); 

  //we created our physics engine 
  engine=Engine.create(); 
  world=engine.world; 
  var options={isStatic:true }; 
  ground=Bodies.rectangle(200,390,200,20,options); 
  World.add(world,ground); 
  console.log(ground.position.x); 
  console.log(ground.position.y);

  var ball_options={restitution: 1.0};
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
} 
  function draw() { 
    background(0); 
    Engine.update(engine); 
    rectMode(CENTER); 
    rect(ground.position.x,ground.position.y,400,20); 

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
  
}