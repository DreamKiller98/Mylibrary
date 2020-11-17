var doremon,nobita
var plant,lion

function setup() {
  createCanvas(800,400);
  doremon = createSprite(400,0,50,50)
  nobita = createSprite(400,400,50,50)
doremon.velocityY = 4
nobita.velocityY = -4

  plant = createSprite(400, 200, 50, 50);
  ball = createSprite(100,100,50,50)
  lion = createSprite(150,380,50,50)
  
  
}

function draw() {
  background("lightblue") 



console.log(lion.x)
lion.x = mouseX;
lion.y = mouseY


if(isTouching(lion,ball)){
  lion.shapeColor = "brown"
  plant.shapeColor = "green"
  ball.shapeColor = "black"
}
else{

  lion.shapeColor = "grey"
  plant.shapeColor = "black"
  ball.shapeColor = "red"

}
bounceOff(doremon,nobita)
  drawSprites();
}

