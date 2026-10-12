const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // !

ctx.fillStyle = "lightblue";
ctx.fillRect(50, 100, 80, 100); // Rectangle (téglalap)

ctx.strokeStyle = "black";
ctx.strokeRect(50, 100, 80, 100); // körvonal

ctx.fillStyle = "black";
ctx.font = "40px Comic Sans MS";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText("5", 50+40, 100+50);

const img = document.createElement("img");
img.src = "karo-8.jpg";
function draw() {
    ctx.drawImage(img, 200, 100, 189/2, 256/2); // 756 x 1024
}
img.addEventListener("load", draw);