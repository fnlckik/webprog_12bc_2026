function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1)) + a;
}

const solution = randint(1, 100);

// const button = document.querySelector("input[type='button']"); // Melyik elem reagál?
const button = document.querySelector("#guessButton");
function handleGuess() { // Hogyan reagál?
    const input = document.querySelector("input[type='number']");
    const guess = parseInt(input.value);
    console.log(`Megoldás: ${solution}`);
    console.log(`Tipp: ${guess}`);
}
button.addEventListener("click", handleGuess); // Mire reagál?
