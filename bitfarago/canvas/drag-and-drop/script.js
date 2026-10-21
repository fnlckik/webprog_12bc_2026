const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // !

const img = document.createElement("img");
img.src = "karo-8.jpg";
const card = { x: 200, y: 100, w: 90, h: 128 };
function draw() {
    ctx.fillStyle = "lightgray";
    ctx.fillRect(0, 0, canvas.width, canvas.height); // törlés
    ctx.drawImage(img, card.x, card.y, card.w, card.h); // kép rajzolás
}
img.addEventListener("load", draw);

function isCard(x, y) {
    return card.x <= x && x <= card.x + card.w &&
           card.y <= y && y <= card.y + card.h;
}

let isDragging = false; // húzható-e?
const mouse = { x: 0, y: 0 };
function handleDown(e) {
    if (!isCard(e.offsetX, e.offsetY)) return;
    console.log("Egér lenyomva.");
    isDragging = true;
    mouse.x = e.offsetX;
    mouse.y = e.offsetY;
    // console.log(mouse);
}
canvas.addEventListener("mousedown", handleDown);

function handleUp(e) {
    console.log("Egér felengedve.");
    isDragging = false;
}
canvas.addEventListener("mouseup", handleUp);

// offsetX: ahol mozgatásban most vagyok
// mouse.x: ahol indult a mozgatásom
function handleMove(e) {
    if (!isDragging) return;
    console.log("Mozgatás!");
    // Milyen vektorral mozgattam el?
    const dx = e.offsetX - mouse.x; // Eltolás AB vektora
    const dy = e.offsetY - mouse.y;
    // Kártya hova kerül?
    card.x += dx;
    card.y += dy;
    // Egér hol van?
    mouse.x = e.offsetX;
    mouse.y = e.offsetY;
    draw();
}
canvas.addEventListener("mousemove", handleMove);