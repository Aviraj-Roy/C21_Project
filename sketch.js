var bullet, speed, weight;
var wall, thickness
var damage;

function setup() 
{
  createCanvas(800,400);
   
  bullet = createSprite(100, 200, 80, 10);
  bullet.shapeColor = "white";
  speed = random(233,321);
  weight = random(30,52);
  bullet.velocityX = speed;
  
  thickness=random(22,83);
  wall = createSprite(600,200,thickness,200);
  wall.shapeColor = color(80,80,80);
  
}

function draw() 
{
  background(255,255,255);  

  if(wall.x-bullet.x < bullet.width/2+wall.width/2)
  {
    bullet.velocityX=0;

    wall_tester();
  }

  drawSprites();
}

function wall_tester()
{
  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
  
  if(damage < 10)
  {
    wall.shapeColor = "green";
  }

  else if( damage>10 )
  {
    wall.shapeColor = "red";
  }
}
/*function draw() 
{
  background(255,255,255);  

  movingrect.x = mouseX;
  movingrect.y = mouseY;

  if(movingrect.x-fixedrect.x < movingrect.width/2+fixedrect.width/2 
    && fixedrect.x-movingrect.x < movingrect.width/2+fixedrect.width/2
    && movingrect.y-fixedrect.y < movingrect.height/2+fixedrect.height/2 
    && fixedrect.y-movingrect.y < movingrect.height/2+fixedrect.height/2)
  {
    fixedrect.shapeColor="red";
    movingrect.shapeColor="red";
  }

  else
  {
    fixedrect.shapeColor="green";
    movingrect.shapeColor="green";
  }

  drawSprites();
}*/