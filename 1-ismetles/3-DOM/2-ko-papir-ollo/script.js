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

function chooseItem(e) {
    const img = e.target; // kattintást kiváltó objektumot adja (target)
    img.classList.add("active");
    for (const image of images) {
        image.removeEventListener("click", chooseItem);
    }
}
const images = document.querySelectorAll("img");
for (const img of images) {
    img.addEventListener("click", chooseItem);
}