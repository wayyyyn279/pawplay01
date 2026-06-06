let gameState = "home";

let score = 0;

let objects = [];
let particles = [];

let playButton;

let gardenButton;
let hunterButton;
let bubbleButton;

function setup() {

  createCanvas(
    windowWidth,
    windowHeight
  );

  textAlign(
    CENTER,
    CENTER
  );

  playButton = {
    x: width / 2,
    y: height / 2 + 80,
    w: 180,
    h: 60
  };

  gardenButton = {
    x: width / 2,
    y: height / 2 + 40,
    w: 220,
    h: 55
  };

  hunterButton = {
    x: width / 2,
    y: height / 2 + 110,
    w: 220,
    h: 55
  };

  bubbleButton = {
    x: width / 2,
    y: height / 2 + 180,
    w: 220,
    h: 55
  };

  cursor(HAND);
}

function draw() {

  if (
    gameState === "home"
  ) {

    drawHome();

  }

  if (
    gameState === "menu"
  ) {

    drawMenu();

  }

  if (
    gameState === "garden"
  ) {

    drawGarden();

  }

  if (
    gameState === "hunter"
  ) {

    drawHunter();

  }

  if (
    gameState === "bubble"
  ) {

    drawBubble();

  }

  drawPawCursor();
}

function drawHome() {

  background(
    250,
    248,
    242
  );

  fill(50);

  textSize(72);

  text(
    "🐾",
    width / 2,
    height / 2 - 120
  );

  textSize(52);

  text(
    "PAWPLAY",
    width / 2,
    height / 2 - 40
  );

  fill(120);

  textSize(18);

  text(
    "Touch • Chase • Explore",
    width / 2,
    height / 2 + 5
  );

  drawButton(
    playButton,
    "PLAY",
    color(
      255,
      210,
      80
    )
  );
}

function drawMenu() {

  background(
    250,
    248,
    242
  );

  fill(50);

  textSize(42);

  text(
    "Choose a Mode",
    width / 2,
    height / 2 - 80
  );

  drawButton(
    gardenButton,
    "🌼 Sunny Garden",
    color(
      255,
      220,
      90
    )
  );

  drawButton(
    hunterButton,
    "🌙 Night Hunter",
    color(
      240,
      240,
      100
    )
  );

  drawButton(
    bubbleButton,
    "🌊 Bubble Bay",
    color(
      120,
      190,
      255
    )
  );
}

function drawButton(
  btn,
  label,
  c
) {

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

function drawPawCursor() {

  noCursor();

  textSize(34);

  text(
    "🐾",
    mouseX,
    mouseY
  );
}
