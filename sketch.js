var backgroundImage,background;
var SurvivalTime
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage,bananasGroup
var FoodGroup, obstacleGroup;
var score;
//var background,backgroundImage;
var ground,invisibleground,groundImage;
function preload(){
  backgroundImage = loadImage("Summer Fantasy Forest Landscape Vector Illustration Stock Vector (Royalty Free) 1259167528.jpg");
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

    
}

function setup() {
 createCanvas(600, 500);

   //creating background
 // background = createSprite(300,300,100,100);
  //background.addImage(backgroundImage);
  background.scale = 2.5
  
  monkey = createSprite (80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.18;
  
 // monkey.addAnimation("running",monkey_running)
  

 // console.log(ground.x)
  
  invisibleGround = createSprite(200,510,400,10);
  invisibleGround.visible = true;
BananasGroup = createGroup();

  if((touches.length > 0 || keyDown("SPACE")) && monkey.y  >= height-120) {
       touches = [];
}
}

  
  
  
function draw() {
    background(backgroundImage);
    background.velocityX =-1;

    stroke("white");
    textSize("20");
    fill("white");
    text("score: "+ score, 400,50);

   stroke("black");
    textSize("20");
    fill("black");
  score=Math.ceil(frameCount/frameRate())
 background.depth = score.depth;
    score.depth = score.depth + 10;
  
  if(keyDown("space")&& monkey.y >= 430) {
        monkey.velocityY = -12;
    }
      monkey.velocityY = monkey.velocityY + 0.35

  
    if (background.x < 0){
      background.x = background.width/2;
    }
    
    monkey.collide(invisibleGround);
    monkey.setCollider("circle");
   // monkey.debug = true
 spawnBanana();
 spawnobstacle();
  drawSprites();

}

function spawnBanana() {
  //write code here to spawn the Banana
 if (frameCount % 100 === 0) {
    var banana = createSprite(600,380,40,10);
    banana.y = Math.round(random(200,380));
    banana.addImage(bananaImage);
    banana.scale = 0.11;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each bananas to the group
    BananasGroup.add(banana);
  }
}
 function spawnobstacle(){
   if (frameCount % 100 === 0) {
    var obstacle = createSprite(600,115,40,10);
     obstacle.y = Math.round(random(465,465));
     obstacle.addImage(obstacleImage);
     obstacle.scale = 0.2;
     obstacle.velocityX = -5;
     
     obstacle.lifetime=200
     
    obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    monkey.collide(obstacle);
    
   }
 }