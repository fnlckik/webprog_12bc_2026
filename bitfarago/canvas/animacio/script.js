const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // !

const img = document.createElement("img");
img.src = "karo-8.jpg";
const pc = { x: 200, y: 100, w: 90, h: 128 };
let v = 3;
function animate() {
    ctx.fillStyle = "lightgray";
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Töröljük a vásznat

    if (pc.x + pc.w < canvas.width - v) { // jobb felső sarok < canvas jobb széle
        pc.x += v;
        pc.y += 5*Math.random();
    } else {
        v = -3;
    }

    if (pc.x > 0) {
        pc.x += v;
        pc.y += -5*Math.random();
    } else {
        v = 3;
    }
    ctx.drawImage(img, pc.x, pc.y, pc.w, pc.h); // Rajzolunk

    requestAnimationFrame(animate); // Jöhet a következő animációs lépés
}
img.addEventListener("load", animate);