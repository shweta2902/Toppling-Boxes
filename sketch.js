const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var box1,box2;


function setup() {
	var canvas = createCanvas(400, 400);
	engine = Engine.create();
	world = engine.world;

	box1= new Box(100,100,50,50);
	box2 = new Box(120,220,20,70);

	ground = new Ground(200,height,400,20)
	//Engine.run(engine);
	//console.log(ground)
  
}


function draw() {

  background("black");
  Engine.update(engine);
  console.log(box2.body.position.x);
  console.log(box2.body.position.y);
  console.log(box2.body.angle);
  box1.display();
  box2.display();
	//rect(200,200,100,100)
  ground.display();
 
}

