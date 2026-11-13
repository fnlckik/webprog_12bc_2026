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
    for (let i = 0; i < n; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < m; j++) {
            const td = document.createElement("td");
            td.innerText = board[i][j].fruit;
            tr.append(td);
        }
        table.appendChild(tr);
    }
}

const button = document.querySelector("input[type='button']");
function startGame() {
    createBoard();
    showBoard();
    button.removeEventListener("click", startGame);
}
button.addEventListener("click", startGame);

const checkbox = document.querySelector("input[type='checkbox']");
function preventClick(e) {
    e.preventDefault();
}
checkbox.addEventListener("click", preventClick);