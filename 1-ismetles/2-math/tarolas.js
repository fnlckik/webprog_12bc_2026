const p = document.querySelector("p");
function handleClick() {
    p.innerText = "Körte";
    localStorage.setItem("gyumolcs", "Körte");
}
const button = document.querySelector("input[type='button']");
button.addEventListener("click", handleClick);

// JSON.stringify({name: "Józsi", age: 17}) => objektumból szöveget csinál
// JSON.parse('{"nev": "Karcsi", "kor": 17}') => szövegből objektumot csinál

// localStorage.setItem("ember", JSON.stringify({name: "Józsi", age: 17}))
// localStorage.clear()
const fruit = localStorage.getItem("gyumolcs");
if (fruit) {
    p.innerText = fruit;
}