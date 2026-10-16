const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // !

// FillRect(x, y, w, h)
// (x, y) bal felső sarok koordinátái
// x jobbra nő
// y lefelé nő
// bal felső: (50, 100)
// jobb alsó: (130, 200)
const card = { x: 50, y: 100, w: 80, h: 100};
ctx.fillStyle = "lightblue";
ctx.fillRect(card.x, card.y, card.w, card.h); // Rectangle (téglalap)

ctx.strokeStyle = "black";
ctx.strokeRect(50, 100, 80, 100); // körvonal

ctx.fillStyle = "black";
ctx.font = "40px Comic Sans MS";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText("5", 50+40, 100+50);

const img = document.createElement("img");
img.src = "karo-8.jpg";
const pc = { x: 200, y: 100, w: 90, h: 128 }; // pc: pokerCard
function draw() {
    ctx.drawImage(img, pc.x, pc.y, pc.w, pc.h); // 756 x 1024
}
img.addEventListener("load", draw);

// PI rad = 180 fok
ctx.beginPath();
ctx.arc(450, 200, 100, -3*Math.PI/2, -Math.PI/2);
ctx.fill();
ctx.closePath();

ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(450, 200, 100, 0, Math.PI / 3);
ctx.lineTo(450, 200);
ctx.fill();
ctx.closePath();

// Szög: 0-tól PI/3-ig
// Középpont: (450, 200)
// Sugara: 100
function isAngle(x, y) {
    
}

function handleClick(e) {
    // Kliens: böngészőben megjelenő oldal bal felső sarkához viszonyít
    // console.log(`Kliens: (${e.clientX}, ${e.clientY})`);
    // Oldal: weboldal tényleges bal felső sarkához viszonyít (görgetésre érzékeny)
    // console.log(`Oldal: (${e.pageX}, ${e.pageY})`);
    // Képernyő: a képernyő bal felső sarkához viszonyít (nagyításra érzékeny)
    // console.log(`Oldal: (${e.screenX}, ${e.screenY})`);
    // Offset: a szülőhöz viszonyít
    // console.log(`Canvas: (${e.offsetX},${e.offsetY})`);
    const x = e.offsetX;
    const y = e.offsetY;
    const dx = x - card.x; // bal felső sarok x koordináta eltérése
    const dy = y - card.y; // bal felső sarok y koordináta eltérése
    if (0 <= dx && dx <= card.w && 0 <= dy && dy <= card.h) { // 50 <= x && x <= 130 && 100 <= y && y <= 200
        console.log("Kék kártya");
    } else if (pc.x <= x && x <= pc.x + pc.w && pc.y <= y && y <= pc.y + pc.h) { // póker kártya
        console.log("Káró 8-as");
    } else if (isAngle(x, y)) {
        console.log("Piros körcikk");
    }
}
canvas.addEventListener("click", handleClick);