/* =========================================
   SHAKA'S ADVENTURES
   VERSION 0.1
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
    y: 620,
    width: 32,
    height: 32,
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

    // Hut Base

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

    // Hut Roof

    ctx.fillStyle = "#d1b16a";

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

    // Outer Fence

    ctx.strokeStyle = "#5a3a1e";
    ctx.lineWidth = 8;

    ctx.strokeRect(
        150,
        50,
        900,
        650
    );

    // Gate Opening

    ctx.fillStyle = "#b88a55";

    ctx.fillRect(
        560,
        690,
        80,
        20
    );

    // Central Kraal

    ctx.beginPath();

    ctx.strokeStyle = "#4a2c15";
    ctx.lineWidth = 10;

    ctx.arc(
        600,
        350,
        120,
        0,
        Math.PI * 2
    );

    ctx.stroke();

    // Elder Hut

    drawHut(600, 140);

    // Hunter Hut

    drawHut(320, 180);

    // Trader Hut

    drawHut(820, 180);

    // Ayanda Hut

    drawHut(250, 460);

    // Warrior Hut

    drawHut(900, 460);

    // Nandi Hut

    drawHut(600, 580);

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
