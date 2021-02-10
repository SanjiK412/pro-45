var mask, vaccine, sanitizer, house, clinic, maskImg, vaccineImg, sanitizerImg, houseImg, clinicImg;
var boyplayer, girlplayer, boyplayerImg, girlplayerImg;
var crowd, crowdImg;

function preload(){
  maskImg=loadImage("./mask.png")
  vaccineImg=loadImage("./vaccine.png")
  sanitizerImg=loadImage("./sanitizer.png")
 houseImg=loadImage("./house.png")
 clinicImg=loadImage("./clinic.png")
 girlplayerImg=loadImage("./girlplayer.gif")
 boyplayerImg=loadImage("./boyplayer.gif")
 crowdImg=loadImage("./crowd.jpg")

}

function setup(){
var canvas = createCanvas(1200,400);

mask=createSprite(200,200,20,20)
mask.addImage("mask", maskImg)
mask.scale=0.2;
vaccine=createSprite(400,200,10,10)
vaccine.addImage("vaccine", vaccineImg)
vaccine.scale=0.1;
sanitizer=createSprite(550,250,15,15)
sanitizer.addImage("sanitizer", sanitizerImg)
sanitizer.scale=0.07
house=createSprite(65,50,14,14)
house.addImage("house", houseImg)
house.scale=0.05
clinic=createSprite(570,352, 20,20)
clinic.addImage("clinic" , clinicImg)
clinic.scale=0.4
girlplayer=createSprite(57,196,20,20)
girlplayer.addImage("girlplayer", girlplayerImg)
girlplayer.scale=0.4
boyplayer=createSprite(193,112, 20,20)
boyplayer.addImage("boyplayer", boyplayerImg)
boyplayer.scale=0.2
crowd=createSprite(484, 126, 20, 20)
crowd.addImage("crowd", crowdImg)
crowd.scale=0.2
}

function draw(){
   background("lightblue"); 
   text(mouseX + "," + mouseY, mouseX, mouseY)
 
   drawSprites();
}   
