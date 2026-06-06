let gameState = "home";

let score = 0;

let objects = [];
let particles = [];

let achievementText = "";
let achievementTimer = 0;

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
y: height / 2 + 90,
w: 200,
h: 65
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

updateParticles();

drawAchievement();

drawPawCursor();
}

function drawHome() {

background(
250,
248,
242
);

push();

translate(
width / 2,
height / 2 - 130
);

rotate(
sin(frameCount * 0.02) * 0.05
);

textSize(90);

text(
"🐾",
0,
0
);

pop();

fill(40);

textSize(58);

text(
"PAWPLAY",
width / 2,
height / 2 - 35
);

fill(120);

textSize(20);

text(
"Touch • Chase • Explore",
width / 2,
height / 2 + 15
);

drawButton(
playButton,
"PLAY",
color(
255,
215,
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
height / 2 - 90
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
120
)
);

drawButton(
bubbleButton,
"🫧 Bubble Bay",
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

rectMode(CENTER);

fill(c);

stroke(255);

strokeWeight(2);

rect(
btn.x,
btn.y,
btn.w,
btn.h,
22
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

function drawTopBar() {

fill(
255,
240
);

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

noStroke();

fill(40);

textSize(18);

text(
"← HOME",
75,
42
);

text(
"🐾 " + score,
width - 75,
42
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
