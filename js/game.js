/* =========================================
   SHAKA'S ADVENTURES
   CORE ENGINE
========================================= */

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/* GLOBAL REGISTRY */
window.Game = {
    canvas,
    ctx
};

/* INIT SYSTEM STATE */
initWorld();
initPlayer();
initTime();
initNPCs();

/* =========================================
   GAME LOOP
========================================= */

function update() {

    updatePlayer();
    updateCamera();
    updateNPCs();
    updateTime();

}

function draw() {

    drawWorld();
    drawNPCs();
    drawPlayer();
    drawUI();

}

function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

loop();

/* RESIZE */
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
