var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
 car=createSprite(50, 100, 50, 50);
 wall=createSprite(1500,200,60,height/2);
  speed=random(55,90);
  weight=random(40,1500);
  car.velocityX=speed;
  
  
}

function draw() {
  background("White");  

  

if(wall.x-car.x<car.width/2+wall.width/2) {

car.velocityX=0;
car.shapeColor="Red"; 

/*var deformation=0.5*weight*speed*speed/22500;
if(deformation<100) {

car.shapeColor(Green);

}

if(deformation>100&&deformation<180) {

  car.shapeColor(Black);
  
  }

  if(deformation>180) {

    car.shapeColor(Blue);
    
    }*/

}


  drawSprites();
}