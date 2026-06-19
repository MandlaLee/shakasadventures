/* =========================================
   SHAKA'S ADVENTURES
   VERSION 0.2
   KWA NANDI VILLAGE
========================================= */

/* =========================================
   CANVAS SETUP
========================================= */

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


/* =========================================
   PLAYER
========================================= */

const player = {
    x: 585,
    y: 720,
    width: 20,
    height: 20,
    speed: 4
};


/* =========================================
   INPUT
========================================= */

const keys = {};

window.addEventListener("keydown", (e) => {
    keys[e.key] = true;
});

window.addEventListener("keyup", (e) => {
    keys[e.key] = false;
});


/* =========================================
   HUT DATA
========================================= */

const huts = [

    // Top Row

    {
        name: "Elder Hut",
        x: 600,
        y: 140
    },

    {
        name: "Hunter Hut",
        x: 320,
        y: 180
    },

    {
        name: "Trader Hut",
        x: 880,
        y: 180
    },

    // Middle Row

    {
        name: "Ayanda Hut",
        x: 220,
        y: 460
    },

    {
        name: "Warrior Hut",
        x: 980,
        y: 460
    },

    // Lower Row

    {
        name: "Family Hut C",
        x: 450,
        y: 560
    },

    {
        name: "Family Hut D",
        x: 750,
        y: 560
    },

    // Bottom Row

    {
        name: "Themba Hut",
        x: 380,
        y: 650
    },

    {
        name: "Nandi Hut",
        x: 820,
        y: 650
    }

];


/* =========================================
   PLAYER MOVEMENT
========================================= */

function update() {

    if (keys["ArrowUp"]) {
        player.y -= player.speed;
    }

    if (keys["ArrowDown"]) {
        player.y += player.speed;
    }

    if (keys["ArrowLeft"]) {
        player.x -= player.speed;
    }

    if (keys["ArrowRight"]) {
        player.x += player.speed;
    }

}


/* =========================================
   DRAW HUT
========================================= */

function drawHut(x, y) {

    // Base

    ctx.fillStyle = "#7b552d";

    ctx.beginPath();
    ctx.arc(
        x,
        y,
        45,
        0,
        Math.PI * 2
    );
    ctx.fill();

    // Roof

    ctx.fillStyle = "#d4b16a";

    ctx.beginPath();
    ctx.arc(
        x,
        y - 5,
        35,
        0,
        Math.PI * 2
    );
    ctx.fill();

}


/* =========================================
   DRAW KRAAL
========================================= */

function drawKraal() {

    ctx.strokeStyle = "#4a2c15";
    ctx.lineWidth = 10;

    ctx.beginPath();

    ctx.arc(
        600,
        350,
        120,
        0,
        Math.PI * 2
    );

    ctx.stroke();

}


/* =========================================
   DRAW FENCE
========================================= */

function drawFence() {

    ctx.strokeStyle = "#5a3a1e";
    ctx.lineWidth = 8;

    // Left

    ctx.beginPath();
    ctx.moveTo(150, 50);
    ctx.lineTo(150, 800);
    ctx.stroke();

    // Top

    ctx.beginPath();
    ctx.moveTo(150, 50);
    ctx.lineTo(1050, 50);
    ctx.stroke();

    // Right

    ctx.beginPath();
    ctx.moveTo(1050, 50);
    ctx.lineTo(1050, 800);
    ctx.stroke();

    // Bottom Left

    ctx.beginPath();
    ctx.moveTo(150, 800);
    ctx.lineTo(520, 800);
    ctx.stroke();

    // Bottom Right

    ctx.beginPath();
    ctx.moveTo(680, 800);
    ctx.lineTo(1050, 800);
    ctx.stroke();

}


/* =========================================
   DRAW GATE
========================================= */

function drawGate() {

    ctx.fillStyle = "#b88a55";

    ctx.fillRect(
        520,
        792,
        160,
        16
    );

}


/* =========================================
   DRAW PLAYER
========================================= */

function drawPlayer() {

    ctx.fillStyle = "#2b1a0f";

    ctx.fillRect(
        player.x,
        player.y,
        player.width,
        player.height
    );

}


/* =========================================
   DRAW VILLAGE
========================================= */

function drawVillage() {

    // Ground

    ctx.fillStyle = "#b88a55";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    drawFence();

    drawGate();

    drawKraal();

    huts.forEach(hut => {
        drawHut(hut.x, hut.y);
    });

}


/* =========================================
   DRAW SCENE
========================================= */

function draw() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    drawVillage();

    drawPlayer();

}


/* =========================================
   GAME LOOP
========================================= */

function gameLoop() {

    update();

    draw();

    requestAnimationFrame(gameLoop);

}

gameLoop();


/* =========================================
   WINDOW RESIZE
========================================= */

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});
