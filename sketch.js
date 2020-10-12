var monkey, Jungle, banana, gameState,PLAY,END;
var monkey_Image, Back_Image, bananaImage;
var invisibleGround, count, stone, stoneImage;

function preload(){         
 
  monkey_Image = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  Back_Image = loadImage("jungle.jpg");
  
  banana_Image = loadImage("banana.png");
  
  stone_Image = loadImage("stone.png");
  
  PLAY = 1;
  END = 0;
  gameState = 1;
   
}

function setup() {
  createCanvas(400, 400);
  
  Jungle = createSprite(200,200,20,20);
  Jungle.addImage("jungle",Back_Image);
  Jungle.scale = 01;
  Jungle.velocityX = -4;
  
  monkey = createSprite(85,330,20,20);
  monkey.addAnimation("M",monkey_Image);
  monkey.scale = 0.2;
  
  invisibleGround = createSprite(200,390,800,20);
  invisibleGround.visible = false;
  invisibleGround.velocityX = -33;
  
  banana = createGroup();
  stone = createGroup();
  
  count = 0;
}

function draw() {
  background(220);
  
  if(Jungle.x < 0){
    Jungle.x = Jungle.width/2;
  }
  
  if(invisibleGround.x<0 ){
   invisibleGround.x = invisibleGround.width/2;
  }

  monkey.velocityY = monkey.velocityY + 0.8;
  
  if(gameState === PLAY){
    
   if(keyWentDown("space") && monkey.y >= 320){
    monkey.velocityY = -15;}
   
  // if(monkey.isTouching(banana)){
  //   banana.destroy();
  //   count = count+2;
  //}
  }
  
  monkey.collide(invisibleGround);
  
  Stones();
  bananas();
  drawSprites();
  
  
  textSize(30);
  text("score"+count,170,40);
  stroke("white");
  fill("yellow");
}

  function bananas(){
    if( frameCount % 95 ===0){
      var banana = createSprite(400,20,20,20);
      banana.addImage("Banana",banana_Image);
      banana.scale = 0.08;
      banana.velocityX = -3;
      banana.y = random( 120,250);
      banana.lifetime = 200;
      //bananas.addGroup(banana);
    }
  }

   function Stones(){
    if( frameCount % 160 ===0){
      var stone = createSprite(400,345,20,20);
      stone.addImage("Stone",stone_Image);
      stone.scale =0.2;
      stone.velocityX = -6;
      stone.velocityX = - (6 + 3*count/100);
      stone.lifetime = 200;
      //Stones.add(stone);
    }
   }