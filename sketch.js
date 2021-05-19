function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  fixedRect=createSprite(600,200,50,100);
  movingRect=createSprite(100,200,100,50);
  fixedRect.shapeColor=green;
  movingRect.shapeColor=green;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
function draw()
background(0,255,255);
movingRect.x=mousex;
movingRect.y=mousey;

(fixedRect.x=movingrect.x)<fixedRect.width =movingRect.width.width2//left
fixedRect.shapeColor="red";
movingRect.shapeColor="red";
}
else{
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  drawSprites();
}