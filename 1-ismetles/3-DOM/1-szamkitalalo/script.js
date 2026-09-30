function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1)) + a;
}

const solution = randint(1, 100);

const table = document.querySelector("table");

// const button = document.querySelector("input[type='button']"); // Melyik elem reagál?
const button = document.querySelector("#guessButton");
function handleGuess() { // Hogyan reagál?
    const input = document.querySelector("input[type='number']");
    const guess = parseInt(input.value);

    const tr = document.createElement("tr");
    table.appendChild(tr);
    const td1 = document.createElement("td");
    td1.innerText = 1;
    tr.appendChild(td1);
    const td2 = document.createElement("td");
    td2.innerText = guess;

    if (guess > solution) {
        console.log(`A ${guess} túl nagy!`);
    } else if (guess < solution) {
        console.log(`A ${guess} túl kicsi!`);
    } else {
        console.log("Eltaláltad!");
        button.disabled = true;
    }
}
button.addEventListener("click", handleGuess); // Mire reagál?
