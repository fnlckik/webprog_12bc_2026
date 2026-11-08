const table = document.querySelector("table");

const input = document.querySelector("input[type='range']");
function generate() {
    const span = document.querySelector("span");
    const n = parseInt(input.value);
    span.innerText = n;
    // nxn-es szorzótábla
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
    const n = table.rows.length;
    console.log(n);
    if (i <= 0 || i > n || j <= 0 || j > n || n === 0 || !i || !j) return;
    const tr = table.rows[i-1]; // táblázatnak sorai vannak
    const td = tr.cells[j-1]; // sornak cellái vannak
    td.style.backgroundColor = "lightgreen";
}
button.addEventListener("click", color);

// e: event objektum (C#: event)
// e.target: az eseményt kiváltó objektum (C#: sender)
function logCell(e) {
    if (!e.target.matches("td")) return;
    console.log(e.target);
}
table.addEventListener("click", logCell);