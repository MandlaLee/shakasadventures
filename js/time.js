/* =========================================
   TIME SYSTEM
========================================= */

let gameTime = {
    hour: 6,
    minute: 0
};

function initTime() {}

function updateTime() {

    gameTime.minute += 0.1;

    if (gameTime.minute >= 60) {
        gameTime.minute = 0;
        gameTime.hour++;
    }

    if (gameTime.hour >= 24) {
        gameTime.hour = 0;
    }
}
