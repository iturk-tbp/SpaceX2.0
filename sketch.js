var gameState = 0;
var astro, astronaut
var Green, g, ger
var Red, r, rde
var Blue, b, bul
var Alien, al, ail
var life, BAlien, GAlien, RAlien, PAlien
var alieb, alier, alieg, aliep

function preload(){
    space = loadImage("space.jpg");
    astro = loadImage("astro.png");
    ger = loadImage("gree.png");
    rde = loadImage("re.png");
    bul = loadImage("blueee.png");
    ail = loadImage("alie.png");
    space2 = loadImage("space2.jpg");
    ailr = loadImage("alier.png");
    ailg = loadImage("alieg.png");
    ailp = loadImage("aliep.png");
    ailb = loadImage("alieb.png");
}

function setup(){
    var canvas = createCanvas(1500,700);
    astronaut = createSprite(100,400,100,100);
    astronaut.addImage("as",astro);
    astronaut.scale = 0.5;
    Green = new Group();
    Red = new Group();
    Blue = new Group();
    Alien = new Group();
    BAlien = new Group();
    PAlien = new Group();
    GAlien = new Group();
    RAlien = new Group();
    g = 0;
    r =0;
    b =0;
    life = 3;
    
}

function draw(){
    if(gameState === 0){
        background(space);
        textSize(30);
        fill("white")
        text("You have succesfully landed on planet Ostromitch Agent OOK. You must find ten green rocks, ten blue rocks, and twelve red rocks to reach planet Grteromitch next.But make sure to jump over any aliens that come your way! However, you must come down to catch the rocks!",25,50,1000,200)
        text("Press Space to start your space mission!",1000,600,500,200);
        if(keyDown("space")){
            gameState = 1;
        }
    }
    if(gameState === 1){
        background(space);
        textSize(30);
        fill("orange")
        text("Remaining Lives..."+ life,25,50,1000,200)
        fill("white");
        rect(500,100,140,35);
        textSize(30);
        stroke(2);
        fill("green");
        text(g,500,100,30,30);
        fill("red");
        text(r,550,100,30,30);
        fill("blue");
        text(b,600,100,30,30);
        var ran = round(random(0,1));
        if(frameCount%175 === 0){
            spawnAliens();
        }
        if(frameCount%125 === 0){
            spawnBAliens();
        }
        if(frameCount%500 === 0){
            spawnRAliens();
        }
        if(frameCount%400 === 0){
            spawnGAliens();
        }
        if(frameCount%1000 === 0){
            spawnPAliens();
        }
        if(frameCount%100 === 0){
            spawnGreenRocks();
        }
        if(frameCount%150 === 0){
            spawnBlueRocks();
        }
        if(frameCount%200 === 0){
            spawnRedRocks();
        }
        if(Green.isTouching(astronaut)){
            g = g+1;
            Green.destroyEach();
        }
        if(Red.isTouching(astronaut)){
            r = r+1;
            Red.destroyEach();
        }
        if(Blue.isTouching(astronaut)){
            b = b+1;
            Blue.destroyEach();
        }
        if(Alien.isTouching(astronaut) && life>1){
            life = life -1;
            Alien.destroyEach();
        }
        if(BAlien.isTouching(astronaut)){
            b = b - 1;
            BAlien.destroyEach();
        }
        if(RAlien.isTouching(astronaut)){
            r = r -1;
            RAlien.destroyEach();
        }
        if(GAlien.isTouching(astronaut)){
            g = g -1;
            GAlien.destroyEach();
        }
        if(PAlien.isTouching(astronaut)){
            life = life + 1;
            PAlien.destroyEach();
        }
        if(g >= 10 && r>= 12 && b >=10){
            gameState = 3;
        }
        if(keyDown("up") && astronaut.y == 400){
            astronaut.y = astronaut.y - 200;
        }
        if(keyDown("down")){
            astronaut.y = 400;
        }
        
    }
    if(gameState === 2){
        background(space);
        Green.destroyEach();
        Red.destroyEach();
        Blue.destroyEach();
        Alien.destroyEach();
        textSize(30);
        fill("white")
        text("Oops.... better luck next time",25,50,1000,200)
        text("Press R to start again!",1000,600,500,200);
        if(keyDown("R")){
            gameState = 0;
            g = 0;
            r = 0;
            b = 0;
        }
    }
    if(gameState === 3){
        background(space2);
        textSize(30);
        fill("white")
        text("You have succesfully reached Grteromitch!",25,50,1000,200)
        text("Press Space to play again!",1000,600,500,200);
        if(keyDown("space")){
            gameState = 0;
            g = 0;
            r = 0;
            b = 0;
        }
        Green.destroyEach();
        Red.destroyEach();
        Blue.destroyEach();
        Alien.destroyEach();
        RAlien.destroyEach();
        BAlien.destroyEach();
        GAlien.destroyEach();
        PAlien.destroyEach();
    }
    
    drawSprites();
    
}

function spawnGreenRocks(){
        var gre = createSprite(1500,500,50,50)
        gre.shapeColor = "green";
        gre.velocityX = -5;
        gre.addImage('g',ger);
        gre.scale = 0.25;
        Green.add(gre);
}
function spawnBlueRocks(){
        var bl = createSprite(1500,500,50,50)
        bl.shapeColor = "blue";
        bl.velocityX = -5;
        bl.addImage('b',bul);
        bl.scale = 0.5;
        Blue.add(bl);
}
function spawnRedRocks(){
        var re = createSprite(1500,500,50,50)
        re.shapeColor = "red";
        re.velocityX = -5;
        re.addImage('r',rde);
        re.scale = 0.25;
        Red.add(re);
}

function spawnAliens(){
        var al = createSprite(1500,500,50,50)
        al.shapeColor = "black";
        al.velocityX = -5;
        al.addImage('a',ail);
        al.scale = 0.25;
        Alien.add(al);
}
function spawnRAliens(){
    var al = createSprite(1500,500,50,50)
    al.shapeColor = "black";
    al.velocityX = -5;
    al.addImage('a',ailr);
    al.scale = 0.25;
    RAlien.add(al);
}
function spawnBAliens(){
    var al = createSprite(1500,500,50,50)
    al.shapeColor = "black";
    al.velocityX = -5;
    al.addImage('a',ailb);
    al.scale = 0.25;
    BAlien.add(al);
}
function spawnGAliens(){
    var al = createSprite(1500,500,50,50)
    al.shapeColor = "black";
    al.velocityX = -5;
    al.addImage('a',ailg);
    al.scale = 0.25;
    GAlien.add(al);
}
function spawnPAliens(){
    var al = createSprite(1500,500,50,50)
    al.shapeColor = "black";
    al.velocityX = -5;
    al.addImage('a',ailp);
    al.scale = 0.25;
    PAlien.add(al);
}