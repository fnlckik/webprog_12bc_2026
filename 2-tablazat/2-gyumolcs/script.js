const table = document.querySelector("table");
const stepsSpan = document.querySelector("#steps span");
const pointsSpan = document.querySelector("#points span");

// Állapottér!
// field = {fruit: 🍎, value: 7}
const n = 6, m = 7;
let board = []; // listák listája ~ "mátrix"
const pos = { x: null, y: null }; // x: sor, y: oszlop
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
// Generatív megközelítés:
function showBoard() {
    table.innerHTML = "";
    for (let i = 0; i < n; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < m; j++) {
            const td = document.createElement("td");
            td.innerText = board[i][j].fruit;
            tr.append(td);
        }
        table.appendChild(tr);
    }
    if (pos.x !== null && pos.y !== null) { // elkezdődött a játék
        table.rows[pos.x].cells[pos.y].innerText = "🫃🏿"; // Johnny
        table.rows[pos.x].cells[pos.y].classList.add("current-position");
    }
    stepsSpan.innerText = remainingSteps;
}

// F2
// table.__proto__
function choosePosition(e) {
    if (!e.target.matches("td")) return;
    const td = e.target;
    const tr = td.parentNode;
    const row = tr.rowIndex; // Hanyadik sor?
    const column = td.cellIndex; // Hanyadik oszlop (cella)?
    pos.x = row;
    pos.y = column;
    collectPoints(pos.x, pos.y);
    // td.classList.add("current-position");
    table.removeEventListener("click", choosePosition);
}
table.addEventListener("click", choosePosition);

// F3
// Imperatív megközelítés (jobbra):
// table.rows[pos.x].cells[pos.y].classList.remove("current-position");
// pos.y++;
// table.rows[pos.x].cells[pos.y].classList.add("current-position");
function handleMove(e) {
    // console.log(e.key);
    if (pos.x === null || pos.y === null) return;
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft" &&
        e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
    if (e.key === "ArrowRight") {
        if (pos.y + 1 < m) pos.y++;
    } else if (e.key === "ArrowLeft") {
        if (pos.y - 1 >= 0) pos.y--;
    } else if (e.key === "ArrowUp") {
        if (pos.x - 1 >= 0) pos.x--;
    } else if (e.key === "ArrowDown") {
        if (pos.x + 1 < n) pos.x++;
    }
    remainingSteps--;
    collectPoints(pos.x, pos.y);
    if (remainingSteps === 0) {
        document.removeEventListener("keyup", handleMove);
        alert(`A végső pontszámod: ${points}`);
    }
    // console.log(pos);
}
document.addEventListener("keyup", handleMove);

// F4
function collectPoints(i, j) {
    points += board[i][j].value;
    pointsSpan.innerText = points;
    board[i][j].value = 0;
    board[i][j].fruit = "";
    showBoard();
}

// F6
function usePower(e) {
    if (e.key !== "s") return;
    for (let i = pos.x-1; i <= pos.x+1; i++) { // szomszédos mezők
        for (let j = pos.y-1; j <= pos.y+1; j++) {
            if (0 <= i && i < n && 0 <= j && j < m) { // ha ez a cella valid
                // console.log(`(${i}, ${j})`);
                collectPoints(i, j);
            }
        }
    }
    checkbox.disabled = true;
    checkbox.parentNode.style.textDecoration = "line-through";
    document.removeEventListener("keyup", usePower);
}
document.addEventListener("keyup", usePower);

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