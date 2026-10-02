function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1)) + a;
}

const solution = randint(1, 100);

const table = document.querySelector("table");
let count = 0;
let minGuess = 0;
let maxGuess = 100;

// const button = document.querySelector("input[type='button']"); // Melyik elem reagál?
const button = document.querySelector("#guessButton");
function handleGuess() { // Hogyan reagál?
    const input = document.querySelector("input[type='number']");
    if (input.value === "") return;
    const guess = parseInt(input.value);
    if (guess < 1 || guess > 100) return;
    count++;

    const tr = document.createElement("tr");
    table.appendChild(tr);
    const td1 = document.createElement("td");
    td1.innerText = count;
    tr.appendChild(td1);
    const td2 = document.createElement("td");
    td2.innerText = guess;
    tr.appendChild(td2);
    const td3 = document.createElement("td");
    tr.appendChild(td3);
    
    if (guess > solution) {
        td3.innerText = "👇";
        maxGuess = guess;
        console.log(`A ${guess} túl nagy!`);
        tr.style.backgroundColor = "rgba(251, 255, 0, 0.4)";
    } else if (guess < solution) {
        td3.innerText = "☝️";
        minGuess = guess;
        console.log(`A ${guess} túl kicsi!`);
        tr.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
    } else {
        td3.innerText = "🎈";
        console.log("Eltaláltad! Gratulálunk!");
        button.disabled = true;
        button.removeEventListener("click", handleGuess);
        // button.remove();
        // const parent = button.parentNode;
        // parent.removeChild(button);
        tr.style.backgroundColor = "rgba(115, 255, 0, 0.4)";
    }
    td3.title = Math.floor((maxGuess + minGuess) / 2);
}
button.addEventListener("click", handleGuess); // Mire reagál?
