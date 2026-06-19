const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const player = {
    x: 200,
    y: 200,
    width: 32,
    height: 32,
    speed: 4
};

const keys = {};

window.addEventListener("keydown", (e) => {
    keys[e.key] = true;
});

window.addEventListener("keyup", (e) => {
    keys[e.key] = false;
});

function update(){

    if(keys["ArrowUp"]){
        player.y -= player.speed;
    }

    if(keys["ArrowDown"]){
        player.y += player.speed;
    }

    if(keys["ArrowLeft"]){
        player.x -= player.speed;
    }

    if(keys["ArrowRight"]){
        player.x += player.speed;
    }
}

function draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    // grass

    ctx.fillStyle = "#7fa44d";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    // player

    ctx.fillStyle = "#3b2416";
    ctx.fillRect(
        player.x,
        player.y,
        player.width,
        player.height
    );
}

function gameLoop(){

    update();
    draw();

    requestAnimationFrame(gameLoop);
}

gameLoop();

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});
