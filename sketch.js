var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,wall11,wall21,wall31,wall1,wall2,wall3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 
	

	

	wall11 = createSprite(400,650,200,20);
	wall11.shapeColor = "red";

	wall1 = Bodies.rectangle(400,650,200,20,{isStatic:true});
	World.add(world, wall1);

	wall21 = createSprite(500,610,20,100);
	wall21.shapeColor = "red";

	wall31 = createSprite(300,610,20,100);
	wall31.shapeColor = "red"; 


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
}
}

