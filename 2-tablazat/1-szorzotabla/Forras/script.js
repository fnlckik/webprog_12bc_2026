const input = document.querySelector("input[type='range']");
function generate() {
    const span = document.querySelector("span");
    const n = parseInt(input.value);
    span.innerText = n;
    // nxn-es szorzótábla
    const table = document.querySelector("table");
    table.innerHTML = "";
    for (let i = 0; i < n; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < n; j++) {
            const td = document.createElement("td");
            td.innerText = (i+1)*(j+1);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
input.addEventListener("input", generate); // change

const button = document.querySelector("input[type='button']");
function color() {
    const i = parseInt(document.querySelector("#row").value);
    const j = parseInt(document.querySelector("#col").value);
    console.log(i, j);
    // Színezzük zöldre az (i, j) cellát!
}
button.addEventListener("click", color);