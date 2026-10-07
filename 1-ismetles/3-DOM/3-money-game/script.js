function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1)) + a;
}

let currentMoney = randint(15, 20) * 1000;
let annaMoney = 0;
let belaMoney = 0;
let player = 1;

document.querySelector(".new-game").addEventListener("click", startGame);

function startGame() {
    document.querySelector(".new-game").style.display = "none";
    document.querySelector(".game").style.display = "block";

    allapotKiiras();
    renderMoney();
    jatekosJeloles();

    document.querySelector(".take-money").addEventListener("click", takeMoney);
}

function allapotKiiras() {
    document.querySelector("#remaining-money").innerText = currentMoney;
    document.querySelector("#anna-money").innerText = annaMoney;
    document.querySelector("#bela-money").innerText = belaMoney;
}

function renderMoney() {
    const penzLista = document.querySelector("#money-images");
    penzLista.innerText = "";
    let maradek = currentMoney;
    for (const cimlet of [5000, 2000, 500]) {
        while (maradek >= cimlet) {
            const listaElem = document.createElement("li");
            const kep = document.createElement("img");
            kep.src = `money-types/${cimlet}.jpg`;
            listaElem.append(kep);
            penzLista.append(listaElem);
            maradek -= cimlet;
        }
    }
}

function jatekosJeloles() {
    const annaIkon = document.querySelector("#anna-icon");
    const belaIkon = document.querySelector("#bela-icon");
    // if (player === 1) {
    //     annaIkon.classList.add("current-player");
    //     belaIkon.classList.remove("current-player");
    // } else {
    //     belaIkon.classList.add("current-player");
    //     annaIkon.classList.remove("current-player");
    // }
    annaIkon.classList.toggle("current-player", player === 1);
    belaIkon.classList.toggle("current-player", player === 2);
}

function takeMoney() {
    const select = document.querySelector("#player-turn select");
    const i = select.selectedIndex;
    // const osszeg = parseInt(select.options[i].innerText.split(" ")[0]);
    const osszeg = (i+1) * 500;
    // const osszeg = select.value * 500;
    if (osszeg > currentMoney) return;

    currentMoney -= osszeg;
    if (player === 1) {
        annaMoney += osszeg;
    } else {
        belaMoney += osszeg;
    }
    allapotKiiras();
    renderMoney();

    if (currentMoney === 0) {
        document.querySelector(".winner span").innerText = player === 1 ? "Anna" : "Béla";
        document.querySelector(".winner").classList.add("show");
        document.querySelector(".take-money").removeEventListener("click", takeMoney);
        return;
    }

    if (player === 1) {
        player = 2;
    } else {
        player = 1;
    }
    jatekosJeloles();
}