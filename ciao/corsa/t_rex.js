let ctx = document.querySelector("canvas").getContext("2d");
let score = document.getElementById("score");

// # -- Public methods -- # //
let tools = {
    generateRandomRGBA: "rgba(" + Math.floor(Math.random() * 365) + "," + Math.floor(Math.random() * 365) + "," + Math.floor(Math.random() * 365) + ",1)",
    randRGBA() {
        return this.generateRandomRGBA;
    },
    lerp(start, end, amt) {
        return (1 - amt) * start + amt * end;
    }
};

// # -- Game gameSettings -- # //
let gameSettings = {
    time: 1,
    score: "0",
    gravity: -0.75,
    friction: 0.2,
    ground: 10,
    fps: 1000 / 60,
    difficulty: 3.5,
    bgColor: "white",
    gameOver: false,
    gMode: true
}

// # -- DeltaTime -- # //
let fps = 60;
let previous = Date.now();
let now;
let lag;

// # -- Resolution -- # //
function initializeResolution(width, height, color) {
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    if (color !== null) {
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, width, height);
        ctx.beginPath();
    }
}

// # -- World -- # //
function world() {
    ctx.beginPath();
    ctx.strokeStyle = "rgba(247,247,247,1)";
    ctx.moveTo(0, ctx.canvas.height - gameSettings.ground);
    ctx.lineTo(ctx.canvas.width, ctx.canvas.height - gameSettings.ground);
    ctx.stroke();
}

// # -- Controls-- # //
let controller = {
    left: false,
    right: false,
    up: false,
    keyListener(e) {
        let keyState = (e.type === "keydown") ? true : false;

        switch (e.keyCode) {
            case 37: // left key
                controller.left = keyState;
                break;
            case 38: // up key
                controller.up = keyState;
                break;
            case 40: // down key
                controller.down = keyState;
                break;
            case 39: // right key
                controller.right = keyState;
                break;
        }
    },
};

window.addEventListener("keydown", controller.keyListener);
window.addEventListener("keyup", controller.keyListener);

// # -- Initialize resolution -- # //
(function initialize() {
    initializeResolution(700, 250, gameSettings.bgColor);
})();


// # -- Enemies -- # //
let enemies = [];

class Enemy {
    constructor(data) {
        this.xCor = data.xCor;
        this.yCor = data.yCor;
        this.width = data.width;
        this.height = data.height;
        this.xVel = gameSettings.difficulty;
        this.color = data.color;
        this.currentFrame = 0;
        this.delayFrame = 3;
        this.count = 0;
        this.sprites = data.sprites;
        this.isMultSprites = Array.isArray(data.sprites);
    }

    draw() {
        let img = new Image();
        img.src = this.isMultSprites ? this.sprites[this.currentFrame] : this.sprites;
        ctx.beginPath();
        ctx.imageSmoothingEnabled = false;
        ctx.strokeStyle = this.color;
        // ctx.strokeRect(this.xCor, this.yCor, this.width, this.height);
        ctx.drawImage(img, this.xCor, this.yCor, this.width, this.height);
    }

    update() {
        this.draw();
        this.xCor -= this.xVel;
        if(this.isMultSprites) {
            if (this.count > 3) {
                if (this.currentFrame >= 1) {
                    this.currentFrame = 0
                } else {
                    this.currentFrame++;
                }
                this.count = 0;
            } else {
                this.count++;
            }
        }
    }
}

let enemyType = [{
        type: "cactus_1",
        width: 25,
        height: 40,
        xCor: ctx.canvas.width - 15,
        yCor: ctx.canvas.height - gameSettings.ground - 40,
        color: "red",
        sprites: "./assets/enemies/cactus_1.png"
    },
    {
        type: "cactus_2",
        width: 45,
        height: 45,
        xCor: ctx.canvas.width - 50,
        yCor: ctx.canvas.height - gameSettings.ground - 45,
        color: "red",
        sprites: "./assets/enemies/cactus_2.png"
    },
    {
        type: "cactus_3",
        width: 65,
        height: 40,
        xCor: ctx.canvas.width - 30,
        yCor: ctx.canvas.height - gameSettings.ground - 40,
        color: "red",
        sprites: "./assets/enemies/cactus_3.png"
    },
    {
        type: "bird",
        width: 40,
        height: 30,
        xCor: ctx.canvas.width - 15,
        yCor: ctx.canvas.height - gameSettings.ground - 130,
        color: "red",
        sprites: ["./assets/enemies/bird_1.png","./assets/enemies/bird_2.png"]
    }
];

let spawn = {
    interval: 2000,
    currentCheckPoint: 50,
    currentEnemySelection:2,
    start(clear) {
        let spawnInterval = setInterval(() => {
            if (document.hasFocus()) {
                enemies.push(new Enemy(enemyType[Math.floor(Math.random() * enemyType.length)]));
            }
        }, this.interval);
    }
};
spawn.start();
let instantiated1 = true;
let instantiated2 = true;

function diffucltyManager() {
    if (+gameSettings.score > spawn.currentCheckPoint) {
        spawn.currentCheckPoint += 100;
        gameSettings.difficulty += 0.5;
    }
    if (+gameSettings.score > 200 && instantiated1) {
        instantiated1 = false;
        spawn.currentEnemySelection = 3;
        spawn.currentEnemySelection !== 3 ? spawn.currentEnemySelection = 3 : false;
    }
    if (+gameSettings.score > 500 && instantiated2) {
        instantiated2 = false;
        spawn.currentEnemySelection !== 4 ? spawn.currentEnemySelection = 4 : false;
    }
}
function scoreManager() {
    let score = +gameSettings.score;
    let digitCount = 4;
    score++;
    gameSettings.score = `${"0".repeat(digitCount - score.toString().length)}${score.toString()}`;
}

setInterval(() => {
    scoreManager();
}, 200)
// # -- Player -- # //

let player = {
    xCor: 50,
    yCor: ctx.canvas.height / 2,
    width: 43,
    height: 48,
    color: "#64686b",
    xVel: 5,
    yVel: 0,
    isJumping: false,
    currentFrame: 0,
    delayFrame: 3,
    count: 0,
    sprites: [
        "./assets/player/carlo_sprite_1.png",
        "./assets/player/carlo_sprite_2.png"
    ],
    state: "idle",
    draw() {
        let img = new Image();
        img.src = this.sprites[this.currentFrame];
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.imageSmoothingEnabled =  false;
        ctx.drawImage(img, this.xCor, this.yCor, this.width, this.height);
        // ctx.strokeRect(this.xCor, this.yCor, this.width, this.height);
    },
    log() {
        score.innerHTML = " " + gameSettings.score;
    },
    physics() {
        this.yCor -= this.yVel;
        this.yVel += gameSettings.gravity; // adding gravity.

        if (this.yCor + this.height - this.yVel > ctx.canvas.height) {
            this.yCor = ctx.canvas.height - (this.height + gameSettings.ground);
        }
        if ((this.yCor + this.height) + gameSettings.ground == ctx.canvas.height) {
            this.state = "idle";
        } else {
            this.state = "jumping";
        }
        if (this.count > 3) {
            if (this.currentFrame >= 1) {
                this.currentFrame = 0
            } else {
                this.currentFrame++;
            }
            this.count = 0;
        } else {
            this.count++;
        }

    },
    controls() {
        if (controller.up && this.state == "idle") {
            this.yVel = 14;
        }
        if (controller.down) {
            this.yVel -= 6;
            // this.height = tools.lerp(this.height, 20, 0.5);
            // this.width = tools.lerp(this.width, 40, 0.5);
        } else {
            // this.width = tools.lerp(this.width, 20, 0.5);
            // this.height = tools.lerp(this.height, 40, 0.1);
        }
    },
    update() {
        this.draw();
        this.physics();
        this.controls();
        this.log();
    }
}

class Background {
    constructor(name) {
        this.x = 0;
        this.y = ctx.canvas.height - 40 - 14;
        this.width = 1200;
        this.height = 40;
        this.name = name;
        this.sprites = {
            ground: ["./assets/environment/ground_1.png", "./assets/environment/ground_2.png"],
            bgCactus: "./assets/environment/background_cactus.png"
        }
    }
    draw() {
        let img = new Image();
        ctx.imageSmoothingEnabled =  false;
        switch (this.name) {
            case "cactus":
                img.src = this.sprites.bgCactus;
                ctx.drawImage(img, this.x, this.y, this.width, this.height);
                break;
            case "ground":
                this.height = 12;
                this.wdith = 1500;
                this.y = ctx.canvas.height - 12 - 10;
                let img2 = new Image();
                img.src = this.sprites.ground[0];
                img2.src = this.sprites.ground[1];
                ctx.drawImage(img, this.x, this.y, this.width, this.height);
                ctx.drawImage(img2, 1200, this.y, this.width, this.height);
                break;
        
            default:
                break;
        }
        this.x -= gameSettings.difficulty / 6;
    }
}

let backgrounds = [];
backgrounds.push(new Background("cactus"));
backgrounds.push(new Background("ground"));

// # -- Collision detection -- # //
function isCollided(gMode) {
    if (enemies.length > 0) {
        for (let i = 0; i < enemies.length; i++) {
            if (player.xCor + player.width >= enemies[i].xCor &&
                enemies[i].xCor + enemies[i].width >= player.xCor &&
                player.yCor + player.height >= enemies[i].yCor && !gMode) {
                return {
                    bool: true,
                    enemy: enemies[i]
                };
            } else {
                return {
                    bool: false,
                    enemy: enemies[i]
                };
            }
        }
    }
}

function gameManager(gMode) {
    if (typeof isCollided() == "object") {
        let { bool, enemy, randRGBA } = isCollided(gMode);
        if (bool) {
            enemy.color = randRGBA;
            gameSettings.isJumping = true;
            clearInterval(updateInterval);
        } else {
            enemy.color = "rgba(87,87,87,1)";
        }
    }
}

// # -- Loop -- # //
function update() {
    requestAnimationFrame(update)
    
    if (document.hasFocus()) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        backgrounds.forEach(bg => {
            bg.draw();
        })
        world();
        for (let i = 0; i < enemies.length; i++) {
            enemies[i].update();
        }
        player.update();
        clearMem();
        diffucltyManager();
        gameManager(gameSettings.gMode);
    }
}

update();

// # -- Clear memory -- # //
function clearMem() {
    if (enemies.length >= 0) {
        for (let i = 0; i < enemies.length; i++) {
            if (enemies[i].xCor + enemies[i].width < 0) {
                enemies.splice(i, 1);
            }
        }
    }
}

var msg_0 = ' ';
var msg_1 = 'che te ne pare?';
var msg_2 = 'credevi di trovarti davanti il vecchio gioco col dinosauro, quello classico?';
var msg_3 = 'credevi male.';
var msg_4 = 'questo è un simulatore di corsa.';
var msg_5 = 'e la corsa è molte cose, ma non è divertente.';
var msg_6 = 'la corsa è contemplativa.';
var msg_7 = 'la corsa è noiosa.';
var msg_8 = 'qui non c’è modo di fare game over.';
var msg_9 = 'solo un’unica, luuuuuuuunga corsa.';
var msg_10 = 'lunghissima.';
var msg_11 = 'niente di ciò che vedi può farti male.';
var msg_12 = 'sei solo tu e la strada.';
var msg_13 = 'a un certo punto non serve più nemmeno la strada.';
var msg_14 = 'resti solo tu.';
var msg_15 = 'tu e la corsa.';
var msg_16 = 'in una dimensione in cui nemmeno il tempo e lo spazio esistono più.';
var msg_17 = 'per sempre.';
var msg_18 = 'rilassati.';
var msg_19 = 'goditela.';
var msg_20 = 'buona corsa.';

function message_1() {document.getElementById('message').innerText = msg_1}
function message_2() {document.getElementById('message').innerText = msg_2}
function message_3() {document.getElementById('message').innerText = msg_3}
function message_4() {document.getElementById('message').innerText = msg_4}
function message_5() {document.getElementById('message').innerText = msg_5}
function message_6() {document.getElementById('message').innerText = msg_6}
function message_7() {document.getElementById('message').innerText = msg_7}
function message_8() {document.getElementById('message').innerText = msg_8}
function message_9() {document.getElementById('message').innerText = msg_9}
function message_10() {document.getElementById('message').innerText = msg_10}
function message_11() {document.getElementById('message').innerText = msg_11}
function message_12() {document.getElementById('message').innerText = msg_12}
function message_13() {document.getElementById('message').innerText = msg_13}
function message_14() {document.getElementById('message').innerText = msg_14}
function message_15() {document.getElementById('message').innerText = msg_15}
function message_16() {document.getElementById('message').innerText = msg_16}
function message_17() {document.getElementById('message').innerText = msg_17}
function message_18() {document.getElementById('message').innerText = msg_18}
function message_19() {document.getElementById('message').innerText = msg_19}
function message_20() {document.getElementById('message').innerText = msg_20}

setTimeout(message_1, 2000);
setTimeout(message_2, 5000);
setTimeout(message_3, 10000);
setTimeout(message_4, 15000);
setTimeout(message_5, 20000);
setTimeout(message_6, 25000);
setTimeout(message_7, 30000);
setTimeout(message_8, 35000);
setTimeout(message_9, 40000);
setTimeout(message_10, 45000);
setTimeout(message_11, 50000);
setTimeout(message_12, 55000);
setTimeout(message_13, 60000);
setTimeout(message_14, 65000);
setTimeout(message_15, 70000);
setTimeout(message_16, 75000);
setTimeout(message_17, 80000);
setTimeout(message_18, 85000);
setTimeout(message_19, 90000);
setTimeout(message_20, 95000);





