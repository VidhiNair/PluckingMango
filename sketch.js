const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stone, sling, bool1;
var tree, mango1, mango2, mango3, mango4, 
    mango5, mango6, mango7, mango8;
var stem1, stem2, stem3, stem4,
    stem5, stem6, stem7, stem8;
var boyImg, rockImg, mangoImg, treeImg;
var mangoArray, stemArray;

engine: engine;

function preload(){
    boyImg = loadImage("boy.png")
    mangoImg = loadImage("mango.png")
    rockImg = loadImage("stone.png")
    treeImg = loadImage("tree.png")
}

function setup(){
  createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    stone = new Block(73,383,10,10,false);
    sling = new Slingshot(stone.body,{x:73, y:383},0.04);
    mango1 = new Block(655,235,18,30,false);
    stem1 = new Slingshot(mango1.body,{x:655,y:235},1);
    mango2 = new Block(755,128,18,30,false);
    stem2 = new Slingshot(mango2.body,{x:755,y:128},1);
    mango3 = new Block(615,190,18,30,false);
    stem3 = new Slingshot(mango3.body,{x:615,y:190},1);
    mango4 = new Block(733,263,18,30,false);
    stem4 = new Slingshot(mango4.body,{x:733,y:263},1);
    mango5 = new Block(643,87,18,30,false);
    stem5 = new Slingshot(mango5.body,{x:643,y:87},1);
    mango6 = new Block(697,186,18,30,false);
    stem6 = new Slingshot(mango6.body,{x:697,y:186},1);
    mango7 = new Block(773,213,18,30,false);
    stem7 = new Slingshot(mango7.body,{x:773,y:213},1);
    mango8 = new Block(809,191,18,30,false);
    stem8 = new Slingshot(mango8.body,{x:809,y:191},1);
    mangoArray = [mango1,mango2,mango3,mango4,
                  mango5,mango6,mango7,mango8,];
    stemArray = [stem1,stem2,stem3,stem4,
                  stem5,stem6,stem7,stem8,]
}

function draw(){
    background(255);
    Engine.update(engine);
    imageMode(CENTER)
    image(boyImg,120,450,160,300)
    image(treeImg,700,280,300,500)
    //console.log(mouseX+", "+mouseY)
    stone.display();
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();
    sling.display();
    stem1.display();
    stem2.display();
    stem3.display();
    stem4.display();
    stem5.display();
    stem6.display();
    stem7.display();
    stem8.display();
    if (bool1 == true){
      Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});  
    }
    if (bool1 == false && stone.body.position.x > 100)
    {
      sling.fly();
    }
    image(rockImg,stone.body.position.x,stone.body.position.y,20,20)
    for(var mango in mangoArray){
        imageMode(CENTER);
            image(mangoImg,
              mangoArray[mango].body.position.x,
              mangoArray[mango].body.position.y,
              60,
              60)
        if(mangoArray[mango].body.speed > 2){
             stemArray[mango].sling.bodyA = null; 
        }
    }
}

function mouseDragged(){
    bool1 = true
}

function mouseReleased(){
    bool1 = false
    
}

function keyPressed(){
if (sling.sling.bodyA == null && keyCode === 32){
   stone = new Block(70,383,10,10,false);
    sling = new Slingshot(stone.body,{x:70,y:383},0.04)
}
}
