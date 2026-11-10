const table = document.querySelector("table");
const stepsSpan = document.querySelector("#steps span");
const pointsSpan = document.querySelector("#points span");

// Állapottér!
// field = {fruit: 🍎, value: 7}
// x: vízszintes (oszlop: j), y: függőleges (sor: i)
const n = 6, m = 7;
let board = []; // listák listája ~ "mátrix"
const pos = { x: null, y: null };
let remainingSteps = 12;
let points = 0;

// -------------------------------------------

// F1 - a)
// 🍎 - 7 (20%); 🍇 - 5 (30%); "" - 0 (50%)
// diszkrét valószínűség: véges sok eset (megszámlálható sok)
// folytonos valószínűség: végtelen sok elemi esemény van (megszámlálhatatlan sok)
function createField() {
    const field = {fruit: "", value: 0};
    const r = Math.random(); // [0, 1) -> valószínűség
    if (r <= 0.2) { // 20%-os valószínűség
        field.fruit = "🍎";
        field.value = 7;
    } else if (r <= 0.5) {
        field.fruit = "🍇";
        field.value = 5;
    }
    return field;
}

// F1 - b)
function createBoard() {
    board = [];
    for (let i = 0; i < n; i++) { // n darab tömb
        const array = [];
        for (let j = 0; j < m; j++) { // m darab elem
            const field = createField();
            array.push(field);
        }
        board.push(array);
    }
}

// F1 - c) -> generál egy táblázatot a board-ból
function showBoard() {
    
}