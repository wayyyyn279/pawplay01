let gameState = "home";
let score = 0;

let objects = [];

let playButton;
let gardenButton;
let hunterButton;
let bubbleButton;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);

  playButton = {
    x: width / 2,
    y: height / 2 + 80,
    w: 180,
    h: 60
  };

  gardenButton = {
    x: width / 2,
    y: height / 2 + 20,
    w: 220,
    h: 55
  };

  hunterButton = {
    x: width / 2,
    y: height / 2 + 95,
    w: 220,
    h: 55
  };

  bubbleButton = {
    x: width / 2,
    y: height / 2 + 170,
    w: 220,
    h: 55
  };
}

function draw() {

  if (gameState === "home") {
    drawHome();
  }

  if (gameState === "menu") {
    drawMenu();
  }

  if (gameState === "garden") {
    drawGarden();
  }

  if (gameState === "hunter") {
    drawHunter();
  }

  if (gameState === "bubble") {
    drawBubble();
  }

  drawPawCursor();
}

function drawHome() {

  background(250,248,242);

  fill(50);
  textSize(70);
  text("🐾", width/2, height/2-120);

  textSize(52);
  text("PAWPLAY", width/2, height/2-40);

  fill(120);
  textSize(18);
  text(
    "Touch • Chase • Explore",
    width/2,
    height/2+10
  );

  drawButton(
    playButton,
    "PLAY",
    color(255,210,80)
  );
}

function drawMenu() {

  background(250,248,242);

  fill(50);
  textSize(42);
  text(
    "Choose a Mode",
    width/2,
    height/2-80
  );

  drawButton(
    gardenButton,
    "🌼 Sunny Garden",
    color(255,220,90)
  );

  drawButton(
    hunterButton,
    "🌙 Night Hunter",
    color(240,240,120)
  );

  drawButton(
    bubbleButton,
    "🫧 Bubble Bay",
    color(120,190,255)
  );
}

function drawGarden() {

  background(255);

  drawTopBar();

  if(frameCount % 40 === 0){
    spawnObject(["🌼","🐝","💛"]);
  }

  updateObjects();
}

function drawHunter() {

  background(20);

  drawTopBar();

  if(frameCount % 40 === 0){
    spawnObject(["⭐","✨","🌙"]);
  }

  updateObjects();
}

function drawBubble() {

  background(180,220,255);

  drawTopBar();

  if(frameCount % 40 === 0){
    spawnObject(["🫧","🐟","💧"]);
  }

  updateObjects();
}

function drawTopBar(){

  fill(255);
  stroke(0);

  rect(20,20,100,40,20);

  fill(0);
  noStroke();

  textSize(18);
  text("← Back",70,40);

  fill(255);
  stroke(0);

  rect(width-120,20,100,40,20);

  fill(0);
  noStroke();

  text(
    "⭐ "+score,
    width-70,
    40
  );
}

function spawnObject(list){

  let emoji =
    random(list);

  objects.push({
    x: random(width),
    y: random(height),
    e: emoji,
    size: random(35,55)
  });
}

function updateObjects(){

  textSize(40);

  for(let i=objects.length-1;i>=0;i--){

    let o = objects[i];

    textSize(o.size);
    text(o.e,o.x,o.y);
  }
}

function mousePressed(){

  if(gameState==="home"){

    if(overButton(playButton)){
      gameState="menu";
    }
  }

  else if(gameState==="menu"){

    if(overButton(gardenButton)){
      gameState="garden";
      objects=[];
      score=0;
    }

    if(overButton(hunterButton)){
      gameState="hunter";
      objects=[];
      score=0;
    }

    if(overButton(bubbleButton)){
      gameState="bubble";
      objects=[];
      score=0;
    }
  }

  else{

    if(
      mouseX>20 &&
      mouseX<120 &&
      mouseY>20 &&
      mouseY<60
    ){
      gameState="menu";
      objects=[];
      return;
    }

    for(
      let i=objects.length-1;
      i>=0;
      i--
    ){

      let d=
      dist(
        mouseX,
        mouseY,
        objects[i].x,
        objects[i].y
      );

      if(d<40){

        objects.splice(i,1);

        score++;

        break;
      }
    }
  }
}

function overButton(btn){

  return (
    mouseX > btn.x-btn.w/2 &&
    mouseX < btn.x+btn.w/2 &&
    mouseY > btn.y-btn.h/2 &&
    mouseY < btn.y+btn.h/2
  );
}

function drawButton(
  btn,
  label,
  c
){

  fill(c);
  stroke(255);
  strokeWeight(2);

  rectMode(CENTER);

  rect(
    btn.x,
    btn.y,
    btn.w,
    btn.h,
    20
  );

  noStroke();

  fill(40);

  textSize(22);

  text(
    label,
    btn.x,
    btn.y
  );
}

function drawPawCursor(){

  noCursor();

  textSize(34);

  text(
    "🐾",
    mouseX,
    mouseY
  );
}

function windowResized(){
  resizeCanvas(
    windowWidth,
    windowHeight
  );
}
