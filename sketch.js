var car,wall;
var speed,weight;


function setup() {
createCanvas(1600,800);
  car=createSprite(100, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = "red";

  wall=createSprite(1450,500,60, 400);
  wall.shapeColor = "white";

 speed=random(55,90);
 weight=random(400,1500);
}

function draw() {
  background(0,0,0);  

  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=3;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
       car.shapeColor=color(255,0,0);
    }
      if(deformation>180 && deformation>100)
    {
         car.shapeColor=color(230,230,0);
    }
    
    if(deformation<100)
    {
        car.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}