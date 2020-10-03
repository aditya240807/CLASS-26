var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var packageSprite, rectanGLE

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	rectanSprite = createSprite(width/2,650,200,20);
	rectanSprite.shapeColor = color(255,0,0);
	
	rectanSprite2 = createSprite(300,610,20,100);
	rectanSprite2.shapeColor = color(255,0,0);
	
	rectanSprite3 = createSprite(510,610,20,100);
	rectanSprite3.shapeColor = color(255,0,0);
	
	packageSprite = createSprite(width/2,200,10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 645, width, 10 ,  { isStatic:true} );
 	World.add(world, ground);
	
	rectan1 = Bodies.rectangle(width/2,635,200,20,{isStatic:true});
	World.add(world, rectan1);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x
  packageSprite.y = packageBody.position.y
  
  
  
  drawSprites();
  
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	  Matter.Body.setStatic(packageBody, false);
		
	}
	

		}
