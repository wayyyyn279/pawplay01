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
    w: 200,
    h: 70
  };

  gardenButton = {
    x: width / 2,
    y: height / 2 + 20,
    w: 240,
    h: 60
  };

  hunterButton = {
    x: width / 2,
    y: height / 2 + 100,
    w: 240,
    h: 60
  };

  bubbleButton = {
    x: width / 2,
    y: height / 2 + 180,
    w: 240,
    h: 60
  };
}

function draw() {

  if (gameState === "home") {
    drawHome();
  }

  else if (gameState === "menu") {
    drawMenu();
  }

  else if (gameState === "garden") {
    drawGarden();
  }

  else if (gameState === "hunter") {
    drawHunter();
  }

  else if (gameState === "bubble") {
    drawBubble();
  }

  drawPawCursor();
}

function drawHome() {

  background(250, 248, 242);

  textSize(90);
  text("🐾", width / 2, height / 2 - 120);

  fill(40);

  textSize(58);
  text("PAWPLAY", width / 2, height / 2 - 35);

  fill(120);

  textSize(20);
  text(
    "Touch • Chase • Explore",
    width / 2,
    height / 2 + 10
  );

  drawButton(
    playButton,
    "PLAY",
    color(255, 215, 80)
  );
}

function drawMenu() {

  background(250, 248, 242);

  fill(50);

  textSize(42);

  text(
    "Choose a Mode",
    width / 2,
    height / 2 - 90
  );

  drawButton(
    gardenButton,
    "Sunny Garden",
    color(255, 220, 90)
  );

  drawButton(
    hunterButton,
    "Night Hunter",
    color(240, 240, 120)
  );

  drawButton(
    bubbleButton,
    "Bubble Bay",
    color(120, 190, 255)
  );
}

function drawGarden() {

  background(255, 252, 245);

  drawTopBar();

  if (frameCount % 35 === 0) {

    spawnObject([
      "🌼",
      "🐝",
      "💛",
      "🦋"
    ]);
  }

  updateObjects();
}

function drawHunter() {

  background(20);

  drawTopBar();

  if (frameCount % 35 === 0) {

    spawnObject([
      "⭐",
      "✨",
      "🌙"
    ]);
  }

  updateObjects();
}

function drawBubble() {

  background(220, 245, 255);

  drawTopBar();

  if (frameCount % 35 === 0) {

    spawnObject([
      "🫧",
      "🐟",
      "💧"
    ]);
  }

  updateObjects();
}

function spawnObject(list) {

  objects.push({

    x: random(width),

    y: random(
      120,
      height
    ),

    vx: random(-2, 2),

    vy: random(-2, 2),

    size: random(
      35,
      60
    ),

    emoji: random(list)

  });
}

function updateObjects() {

  for (
    let i = 0;
    i < objects.length;
    i++
  ) {

    let o = objects[i];

    o.x += o.vx;
    o.y += o.vy;

    if (
      o.x < 20 ||
      o.x > width - 20
    ) {
      o.vx *= -1;
    }

    if (
      o.y < 100 ||
      o.y > height - 20
    ) {
      o.vy *= -1;
    }

    textSize(o.size);

    text(
      o.emoji,
      o.x,
      o.y
    );
  }
}

function drawTopBar() {

  fill(255);

  stroke(180);

  rectMode(CORNER);

  rect(
    20,
    20,
    110,
    42,
    20
  );

  rect(
    width - 130,
    20,
    110,
    42,
    20
  );

  fill(40);

  noStroke();

  textSize(18);

  text(
    "HOME",
    75,
    42
  );

  text(
    "Score " + score,
    width - 75,
    42
  );
}

function mousePressed() {

  if (gameState === "home") {

    if (
      overButton(
        playButton
      )
    ) {

      gameState = "menu";
    }
  }

  else if (
    gameState === "menu"
  ) {

    if (
      overButton(
        gardenButton
      )
    ) {

      gameState = "garden";
      objects = [];
      score = 0;
    }

    if (
      overButton(
        hunterButton
      )
    ) {

      gameState = "hunter";
      objects = [];
      score = 0;
    }

    if (
      overButton(
        bubbleButton
      )
    ) {

      gameState = "bubble";
      objects = [];
      score = 0;
    }
  }

  else {

    if (

      mouseX > 20 &&
      mouseX < 130 &&

      mouseY > 20 &&
      mouseY < 62

    ) {

      gameState = "menu";

      objects = [];

      return;
    }

    for (

      let i =
        objects.length - 1;

      i >= 0;

      i--

    ) {

      let d = dist(

        mouseX,
        mouseY,

        objects[i].x,
        objects[i].y

      );

      if (d < 40) {

        objects.splice(i, 1);

        score++;

        break;
      }
    }
  }
}

function overButton(btn) {

  return (

    mouseX >
      btn.x - btn.w / 2 &&

    mouseX <
      btn.x + btn.w / 2 &&

    mouseY >
      btn.y - btn.h / 2 &&

    mouseY <
      btn.y + btn.h / 2

  );
}

function drawButton(
  btn,
  label,
  c
) {

  rectMode(CENTER);

  fill(c);

  stroke(255);

  strokeWeight(2);

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

  textSize(36);

  text(
    "🐾",
    mouseX,
    mouseY
  );
}

function windowResized() {

  resizeCanvas(
    windowWidth,
    windowHeight
  );
}
