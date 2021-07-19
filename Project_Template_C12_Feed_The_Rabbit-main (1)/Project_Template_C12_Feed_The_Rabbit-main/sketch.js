var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleimg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg = loadImage("apple.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}



function draw() {
  background(0);

  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(30,60))
  if(frame % 34 == 0) {
    if(select_sprites == 1) {

      createapples();
    }

    
  }
  
  drawSprites();
}

function createapples() {


  apple = createSprite(200,34,56,23)
  apple.addImage(appleimg)
  apple.scale = 0.06
  apple.velocityY = 3
}


