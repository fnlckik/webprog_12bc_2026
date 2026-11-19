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
const rook = { x: null, y: null }; // x: sor, y: oszlop
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



// F2



// F3



// F4



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
    return true;
}

// F6



// F7



// F8


