const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // !

const img = document.createElement("img");
img.src = "karo-8.jpg";
const card = { x: 200, y: 100, w: 90, h: 128 };
function handleLoad(e) {
    ctx.drawImage(img, card.x, card.y, card.w, card.h);
}
img.addEventListener("load", handleLoad);

