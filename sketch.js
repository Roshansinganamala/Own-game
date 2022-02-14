var buggati;
var car1;
var truck;
var car2;
var police;
var road;

function preload(){
    var PLAY=1;
    var END=0;
    var gameState=1;
    
            car1Img = loadImage("car 1.png");
            car2Img = loadAnimation("car 2.jpg");
            truckImg = loadImage("truck.jpg");
            policeImg = loadImage("police car.png");
            buggatiImg = loadImage("sports car.png");
            roadImg = loadImage("background-1.png");
            
}   

function setup() {
    createCanvas(400,600);
    // Moving background
   // road=createSprite(200,200);
    //road.addImage(roadImg);
    //road.velocityY = 4;

    //if(road.y > 400 ){
    //    road.y = height/2;
     // }

      road=createSprite(200,200);
      road.addImage(roadImg);
      road.velocityY = 4;
      
      
      if(road.y > 400 ){
        road.y = height/2;
      }

    buggati = createSprite(190,500,20,20);
buggati.addImage(buggatiImg);
buggati.scale=0.23;
}

function draw() {
 drawSprites();
}