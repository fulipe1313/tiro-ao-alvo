var bow , arrow,  background;
var bowImage, arrowImage, greenImage, redImage, pinkImage ,blueImage, backgroundImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  redImage = loadImage("red_balloon0.png");
  blueImage = loadImage("blue_balloon0.png");
  greenImage = loadImage("green_balloon0.png");
  pinkImage = loadImage("pink_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  
  
}

function draw() {
 background(0);
  
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  
  bow.y = World.mouseY
  
  
  if (keyDown("space")) {
    createArrow();
    
  }
  
  
  var select_balloon = Math.round(random(1,1));
  
  if (World.frameCount % 100 == 0) {
    switch(select_balloon){
     case 1: 
     red.addImage(redImage);
     break;
     case 2:
     blue.addImage(blueImage);
     break;
     case 3:
     green.addImage(greenImage);
     break;
     case 4:
     pink.addImage( pinkImage);
     break;
  
   }}
  
  drawSprites();
}



 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(redImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

}
function blueBalloon() {
  var blue = createSprite (0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blueImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
}
function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(greenImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
}
function pinkBalloon() {
  var  pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage( pinkImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 0.1;
}