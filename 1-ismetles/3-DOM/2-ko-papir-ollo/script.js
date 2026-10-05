// [a..b] intervallumon generál random egész számot
function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1)) + a;
}

// ko, papir, ollo
function choose() {
    const options = ["ko", "papir", "ollo"];
    const r = randint(0, 2);
    return options[r];
}

// "ko", "ollo" => "Játékos nyert!"
// "ollo", "ko" => "Számítógép nyert!"
// "ko", "ko" => "Döntetlen!"
function decideWinner(player, computer) {
    if (player === computer) return "Döntetlen!";
    if (player === "ko" && computer === "ollo" ||
        player === "papir" && computer === "ko" ||
        player === "ollo" && computer === "papir") return "Játékos nyert!";
    return "Számítógép nyert!";
}

// e: event (esemény objektum)
function chooseItem(e) {
    const img = e.target; // kattintást kiváltó objektumot adja (target)
    img.classList.add("active");
    for (const image of images) {
        image.removeEventListener("click", chooseItem);
    }
    const computer = choose(); // "ko", "papir", "ollo"
    const computerImg = document.createElement("img");
    computerImg.src = `images/${computer}.png`;
    computerImg.classList.add("img-height");
    const p = document.querySelector("#eredmeny");
    p.before(computerImg);
    p.innerText = decideWinner(img.alt, computer);
}
const images = document.querySelectorAll("img");
for (const img of images) {
    img.addEventListener("click", chooseItem);
}