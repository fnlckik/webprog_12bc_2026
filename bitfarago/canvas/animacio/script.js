const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // !

const img = document.createElement("img");
img.src = "karo-8.jpg";
const pc = { x: 200, y: 100, w: 90, h: 128 };
let v = 10;
function animate() {
    // Töröljük a vásznat
    ctx.fillStyle = "lightgray";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Animációs lépés: rajzolandó objektum módosítása
    if (pc.x + pc.w < canvas.width - v) { // jobb felső sarok < canvas jobb széle
        pc.x += v;
        pc.y += 5*Math.random();
    } else {
        v = -5;
    }

    if (pc.x > 0) {
        pc.x += v;
        pc.y += -5*Math.random();
    } else {
        v = 5;
    }
    ctx.drawImage(img, pc.x, pc.y, pc.w, pc.h); // Rajzolunk

    // Jöhet a következő animációs lépés
    requestAnimationFrame(animate);
}

// keys[KEY] akkor true, ha KEY le van nyomva
const keys = {
    KeyA: false,
    KeyD: false,
    KeyW: false,
    KeyS: false
};

function move() {
    ctx.fillStyle = "lightgray";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (keys["KeyD"]) {
        pc.x += v;
    } else if (keys["KeyA"]) {
        pc.x -= v;
    }
    if (keys["KeyW"]) {
        pc.y -= v;
    } else if (keys["KeyS"]) {
        pc.y += v;
    }
    if (pc.x + pc.w > canvas.width) pc.x = canvas.width - pc.w; // ne tudjak kimenni jobb oldalt
    if (pc.x < 0) pc.x = 0; // ne tudjak kimenni bal oldalt
    ctx.drawImage(img, pc.x, pc.y, pc.w, pc.h); // Rajzolunk
    requestAnimationFrame(move);
    // Gond: egyre gyorsabb! --> SZERDA
}

function handleDown(e) {
    // e.key: funkciót azonosít (Control, d, D)
    // e.code: billentyűt azonosít (ControlLeft, ControlRight, KeyD)
    // console.log(e.key, e.code);
    keys[e.code] = true;
}

function handleUp(e) {
    keys[e.code] = false;
}

function handleLoad(e) {
    ctx.drawImage(img, pc.x, pc.y, pc.w, pc.h); // Rajzolunk
    // keyup: gomb felengedése
    // keydown: gomb nyomvatartása
    document.addEventListener("keydown", handleDown);
    document.addEventListener("keyup", handleUp);
    move();
    // animate();
}
img.addEventListener("load", handleLoad);