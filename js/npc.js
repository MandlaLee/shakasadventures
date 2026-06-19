/* =========================================
   NPC SYSTEM (EMPTY FOR NOW)
========================================= */

let npcs = [];

function initNPCs() {

    npcs = [
        { name: "Nandi", x: 1400, y: 1450 }
    ];
}

function updateNPCs() {
    // future: schedules, movement
}

function drawNPCs() {

    const ctx = Game.ctx;

    for (let n of npcs) {

        ctx.fillStyle = "#5a2b2b";

        ctx.fillRect(
            n.x - camera.x,
            n.y - camera.y,
            16,
            16
        );
    }
}
