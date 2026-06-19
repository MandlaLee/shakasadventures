/* =========================================
   WORLD SYSTEM
========================================= */

let camera = {};

let village = {};

let huts = [];

function initWorld() {

    camera = {
        x: 0,
        y: 0
    };

    village = {

        x: 800,
        y: 400,

        width: 1200,
        height: 1200,

        gateX: 1320,
        gateWidth: 160,

        kraal: {
            x: 1400,
            y: 900,
            radius: 120
        }

    };

    huts = [

        {
            name: "Elder",
            x: 1400,
            y: 600
        },

        {
            name: "Hunter",
            x: 1100,
            y: 650
        },

        {
            name: "Trader",
            x: 1700,
            y: 650
        },

        {
            name: "Ayanda",
            x: 1000,
            y: 1050
        },

        {
            name: "Warrior",
            x: 1800,
            y: 1050
        },

        {
            name: "Family C",
            x: 1200,
            y: 1300
        },

        {
            name: "Family D",
            x: 1600,
            y: 1300
        },

        {
            name: "Themba",
            x: 1150,
            y: 1550
        },

        {
            name: "Nandi",
            x: 1650,
            y: 1550
        }

    ];

}

/* =========================================
   CAMERA
========================================= */

function updateCamera() {

    camera.x =
        player.x -
        window.innerWidth / 2;

    camera.y =
        player.y -
        window.innerHeight / 2;

    if (camera.x < 0)
        camera.x = 0;

    if (camera.y < 0)
        camera.y = 0;

    if (camera.x >
        world.width - window.innerWidth)
    {
        camera.x =
            world.width - window.innerWidth;
    }

    if (camera.y >
        world.height - window.innerHeight)
    {
        camera.y =
            world.height - window.innerHeight;
    }

}

/* =========================================
   HUT
========================================= */

function drawHut(x, y) {

    const ctx = Game.ctx;

    ctx.fillStyle = "#7b552d";

    ctx.beginPath();
    ctx.arc(
        x - camera.x,
        y - camera.y,
        45,
        0,
        Math.PI * 2
    );
    ctx.fill();

    ctx.fillStyle = "#d4b16a";

    ctx.beginPath();
    ctx.arc(
        x - camera.x,
        y - camera.y - 5,
        35,
        0,
        Math.PI * 2
    );
    ctx.fill();

}

/* =========================================
   DRAW WORLD
========================================= */

function drawWorld() {

    const ctx = Game.ctx;

    // Ground

    ctx.fillStyle = "#b88a55";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    // Fence

    ctx.strokeStyle = "#5a3a1e";
    ctx.lineWidth = 6;

    ctx.strokeRect(
        village.x - camera.x,
        village.y - camera.y,
        village.width,
        village.height
    );

    // Gate

    ctx.clearRect(
        village.gateX - camera.x,
        village.y + village.height - camera.y - 5,
        village.gateWidth,
        15
    );

    // Kraal

    ctx.beginPath();

    ctx.arc(
        village.kraal.x - camera.x,
        village.kraal.y - camera.y,
        village.kraal.radius,
        0,
        Math.PI * 2
    );

    ctx.stroke();

    // Huts

    huts.forEach(hut => {
        drawHut(hut.x, hut.y);
    });

}
