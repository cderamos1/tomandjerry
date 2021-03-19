var background, backgroundImg;
var cat, catImg, catImg2, catImg3;
var mouse, mouseImg, mouseImg2, mouseImg3;

function preload() {
    //load the images here
    backgroundImg = loadImage("garden.png");
    catImg = loadImage("cat1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    catImg3 = loadImage("cat4.png");
    mouseImg = loadImage("mouse1.png");
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
    mouseImg3 = loadImage("mouse4.png");
}

function setup(){
    createCanvas(400,400);

    background = createSprite(300,300)
    background.addImage("garden",backgroundImg);

    //create tom and jerry sprites here
    cat = createSprite(250,300);
    cat.addImage(catImg);

    mouse = createSprite(150,300);
    mouse.addImage(mouseImg);
}

function draw() {
    background(255);

    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width-mouse.width)/2){
        cat.velocityX = 0;

        cat.addImage("catLastImage", catImg3);
        cat.changeImage("catLastImage");
        mouse.addImage("mouseLastImage", mouseImg3);
        mouse.changeImage("mouseLastImage");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === left_arrow){
      cat.velocityX = -5;
      cat.addAnimation("catRunning",catImg2);
      cat.changeAnimation("catRunning");
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation("mouseTeasing");
  }

}
