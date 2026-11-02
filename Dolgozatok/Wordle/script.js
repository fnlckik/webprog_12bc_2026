const words = ["telefon", "Kafka", "citrom", "unikornis", "alma", "huszár", "hoki", "kisegér", "Baranya", "kaktusz"];
const modes = { easy: 12, normal: 6, hard: 4 };

let solution; // kitalálandó feladvány
let count = 0;
let countLimit;

// ----------------------------------------------

// F1 - 2p
function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1) + a);
}

function getRandomWord() {
    const i = randint(0, words.length-1);
    return words[i].toUpperCase();
}

// F2 - 7p
// const i = select.selectedIndex;
// console.log(select.options[i].value);
// if (select.value === "easy") {
//     countLimit = modes.easy;
// } else if (select.value === "normal") {
//     countLimit = modes.normal;
// } else {
//     countLimit = modes.hard;
// }
// console.log(countLimit);
const startButton = document.querySelector("#startButton");
function handleStart() {
    solution = getRandomWord();
    const select = document.querySelector("select");
    countLimit = modes[select.value];
    const p = document.querySelector(".message");
    p.innerText = `A kitalálandó szó hossza: ${solution.length}`;
    select.parentNode.style.display = "none";
    const game = document.querySelector("#game");
    game.style.display = "block";
    renderCards();
}
startButton.addEventListener("click", handleStart);


// F3 - 3p
function renderCards() {
    const ul = document.querySelector("ul");
    for (let i = 0; i < solution.length; i++) {
        const li = document.createElement("li");
        ul.appendChild(li);
    }
}


// F4 - 2p
function containsCharOld(word, c) {
    let i = 0;
    while (i < word.length && !(word[i] === c)) {
        i++;
    }
    return i < word.length;
}

function containsChar(word, c) {
    return word.includes(c);
}


// F5 - 6p



// F6 - 5p



// F7 - bónusz


