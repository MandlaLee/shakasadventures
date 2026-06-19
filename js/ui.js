/* =========================================
   UI SYSTEM
========================================= */

function drawUI() {

    const ctx = Game.ctx;

    ctx.fillStyle = "#000";
    ctx.font = "16px Arial";

    ctx.fillText(
        `Time: ${Math.floor(gameTime.hour)}:${Math.floor(gameTime.minute)}`,
        20,
        30
    );
}
