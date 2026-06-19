/* =========================================
   PLAYER SYSTEM
========================================= */

let player = {};

let keys = {};

window.addEventListener("keydown", e => keys[e.key] = true);
window.addEventListener("keyup", e => keys[e.key] = false);

function initPlayer() {

    player = {
        x: 1200,
        y: 1650,
        w: 20,
        h: 20,
        speed: 4
    };

}

/* =========================================
   COLLISION CHECK
========================================= */

function isColliding(x, y) {

    const playerRadius = 12;

    // HUT COLLISION

    for (const hut of huts) {

        const dx = x - hut.x;
        const dy = y - hut.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 55) {
            return true;
        }
    }

    // KRAAL COLLISION

    const kraalDX = x - village.kraal.x;
    const kraalDY = y - village.kraal.y;

    const kraalDistance =
        Math.sqrt(
            kraalDX * kraalDX +
            kraalDY * kraalDY
        );

    if (kraalDistance < 135) {
        return true;
    }

    return false;
}

/* =========================================
   PLAYER MOVEMENT
========================================= */

function updatePlayer() {

    let nextX = player.x;
    let nextY = player.y;

    if (keys["ArrowUp"]) {
        nextY -= player.speed;
    }

    if (keys["ArrowDown"]) {
        nextY += player.speed;
    }

    if (keys["ArrowLeft"]) {
        nextX -= player.speed;
    }

    if (keys["ArrowRight"]) {
        nextX += player.speed;
    }

    // WORLD LIMITS

    if (nextX < 0) nextX = 0;
    if (nextY < 0) nextY = 0;

    if (nextX > world.width)
        nextX = world.width;

    if (nextY > world.height)
        nextY = world.height;

    // OBJECT COLLISION

    if (!isColliding(nextX, nextY)) {

        player.x = nextX;
        player.y = nextY;

    }

}

/* =========================================
   DRAW PLAYER
========================================= */

function drawPlayer() {

    const ctx = Game.ctx;

    ctx.fillStyle = "#2b1a0f";

    ctx.fillRect(
        player.x - camera.x,
        player.y - camera.y,
        player.w,
        player.h
    );

}
