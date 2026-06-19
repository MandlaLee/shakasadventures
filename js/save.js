/* =========================================
   SAVE SYSTEM (FUTURE)
========================================= */

function saveGame() {

    const data = {
        player,
        huts,
        npcs,
        gameTime
    };

    localStorage.setItem("shaka_save", JSON.stringify(data));
}

function loadGame() {

    const data = JSON.parse(localStorage.getItem("shaka_save"));

    if (!data) return;

    player = data.player;
    huts = data.huts;
    npcs = data.npcs;
    gameTime = data.gameTime;
}
