function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1)) + a;
}

const figures = {
    pawn: "♟",
    rook: "♜",
    none: ""
};

// Állapottér
let board = [];
const rook = { x: null, y: null };
let moves = 0;
let captured = 0;

// DOM
const table = document.querySelector("table");
const movesSpan = document.querySelector("#moves");
const capturedSpan = document.querySelector("#captured");

// ---------------------------------
// Feladatok
// ---------------------------------

// F1
function createBoard(n) {
    board = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row.push(figures.none);
        }
        board.push(row);
    }
}

// F2
function placeFigures() {
    for (const row of board) {
        const i = randint(0, row.length-1);
        row[i] = figures.pawn;
    }
    rook.x = randint(0, board.length-1); // sor
    rook.y = randint(0, board[0].length-1); // oszlop
}

// F3
function showBoard() {
    table.innerHTML = "";
    for (let i = 0; i < board.length; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < board.length; j++) {
            const td = document.createElement("td");
            td.innerText = board[i][j];
            td.style.backgroundColor = (i+j) % 2 === 0 ? "#f0d9b5" : "#b58863";
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    table.rows[rook.x].cells[rook.y].innerText = figures.rook;
    movesSpan.innerText = moves;
    capturedSpan.innerText = captured;
}

// F4
function startGame() {
    moves = 0;
    captured = 0;
    createBoard(8);
    placeFigures();
    showBoard();
    document.addEventListener("keydown", showMoves);
    document.addEventListener("keyup", hideMoves);
    table.addEventListener("click", moveRook);
}
const input = document.querySelector("input[type='button']");
input.addEventListener("click", startGame);

// F5
function isValid(i, j) {
    if (i !== rook.x && j !== rook.y) return false;
    if (i === rook.x && j === rook.y) return false;
    for (let r = i+1; r < rook.x; r++) {
        if (board[r][j] !== figures.none) return false;
    }
    for (let r = rook.x+1; r < i; r++) {
        if (board[r][j] !== figures.none) return false;
    }
    for (let c = j+1; c < rook.y; c++) {
        if (board[i][c] !== figures.none) return false;
    }
    for (let c = rook.y+1; c < j; c++) {
        if (board[i][c] !== figures.none) return false;
    }
    return true;
}

// F6
function showMoves(e) {
    if (e.key !== "v") return;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const td = table.rows[i].cells[j];
            if (isValid(i, j)) td.style.backgroundColor = "#a3c9a5";
        }
    }
}

// F7
function hideMoves(e) {
    if (e.key !== "v") return;
    showBoard();
}

// F8
function moveRook(e) {
    if (!e.target.matches("td")) return;
    const td = e.target;
    const i = td.parentNode.rowIndex;
    const j = td.cellIndex;
    if (!isValid(i, j)) return;
    rook.x = i;
    rook.y = j;
    moves++;
    if (board[i][j] === figures.pawn) {
        board[i][j] = figures.none;
        captured++;
    }
    showBoard();
    if (captured === board.length) {
        alert("Győztél!");
        table.removeEventListener("click", moveRook);
    }
    else if (moves >= 20) {
        alert("Vesztettél!");
        table.removeEventListener("click", moveRook);
    } 
}