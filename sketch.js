const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Event = Matter.Event;

var engine, world;
var box1, pig1;
var backgroundImg;
var flag = 0;
function preload(){
    backgroundImg = loadImage("sprites/bg.jpg");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    
    ground = new Ground(600,height,1200,20)

    boy = new Bird(600,300,50,100);
    khan = new Man(900,280,90,200);
    act = new Act1(1100,280,80,200);
    wall = new Log(150,240,20,300);
    //table = new Box(190,360,70,70);
    
    
    edge = new Log(320,250,150,7);
    edge1 = new Log(470,200,150,7);
    edge2 = new Log(600,150,150,7);
    //edge3 = new Log(70 ,130,570,7);
    jail = new Jail (70,340,140,105)
    
   console.log(boy.body.velocity.y);

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
    ground.display();
    
    boy.display();
    khan.display();
    act.display();
    //table.display(); 
    
    //edge3.display();
    wall.display();
   
    edge.display();
    edge1.display();
    edge2.display();
    
   
    ground.display();
    jail.display();
    console.log(boy.body.position.y);

    var collision = Matter.SAT.collides(boy.body,khan.body);
    if(collision.collided){
        flag = 1;
    }
    if (flag === 1){
        Matter.Body.setPosition(boy.body,{x:70,y:320});
    }

    
    //boy.body.velocity.y = boy.body.velocity.y+1;
}

function keyPressed(){
    if (keyCode === 32 ){
    Matter.Body.applyForce(boy.body,{x:boy.body.position.x,y:boy.body.position.y},{x:0,y:-100});
    }
    if (keyCode === RIGHT_ARROW ){
        Matter.Body.applyForce(boy.body,{x:boy.body.position.x,y:boy.body.position.y},{x:20,y:0});
        }
        if (keyCode === LEFT_ARROW ){
            Matter.Body.applyForce(boy.body,{x:boy.body.position.x,y:boy.body.position.y},{x:-20,y:0});
            }
            if (keyCode === DOWN_ARROW ){
                Matter.Body.applyForce(boy.body,{x:boy.body.position.x,y:boy.body.position.y},{x:20,y:-100});
                }
                if (keyCode === 82){
                    Matter.Body.rotate(boy.body,PI/2);
                    }
        
}





