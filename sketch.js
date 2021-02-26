var garden, gardenimg;
var cat, tom1img,tom2img,tom3img, mouse, mouse1img, mouse2img, mouse3img;

function preload() {
    //load the images here
gardenimg = loadImage("images/garden.png");
tom1img = loadAnimation("images/cat1.png");
tom2img = loadAnimation("images/cat2.png"," images/cat3.png");
tom3img = loadAnimation("images/cat4.png")
mouse1img = loadAnimation("images/mouse1.png");
mouse2img = loadAnimation("images/mouse2.png", "images/mouse3.png");
mouse3img = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
garden = createSprite(200,100,1000,800)
garden.addImage(gardenimg);
garden.scale = 1;

    cat = createSprite(500,400,20,20);
    cat.addAnimation("c", tom1img);
    cat.scale = 0.2;
    mouse = createSprite(200,400,20,20);
mouse.addAnimation("m", mouse1img);
mouse.scale = 0.2;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
text(mouseX+','+mouseY, 10,45);

if (cat.x - mouse.x < (cat.width-mouse.width)/2 )
{
    cat.addAnimation("cattt", tom2img);
    cat.changeAnimation("cattt");
    cat.velocityX =0;
    mouse.addAnimation("mouseee", mouse2img);
    mouse.changeAnimation("mouseee");
}

    
    
    drawSprites();
    
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode===LEFT_ARROW)
{
    cat.x   = cat.x-10;
    cat.addAnimation("catrunning", cat3img);
    cat.changeAnimation("catrunning");
    mouse.addAnimation("mouserunning", mouse3img);
    mouse.changeAnimation("mouserunning");
}

}
