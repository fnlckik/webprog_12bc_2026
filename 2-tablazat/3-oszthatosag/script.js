// 1. Generáljatok egy 10x10-es táblázatot
// Véletlen számokkal feltöltve (1 és 99 közötti véletlen számok)
function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1)) + a;
}

const table = document.querySelector("table");
function generate(n, m) {
    table.innerHTML = "";
    for (let i = 0; i < n; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < m; j++) {
            const td = document.createElement("td");
            td.innerText = randint(1, 99);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
generate(6, 7);

// 2. Amikor módosítjuk az input értékét
// az n-nel osztható cellák háttere legyen citromsárga!
function handleInput() {
    const n = parseInt(input.value);
    for (const row of table.rows) {
        for (const cell of row.cells) {
            if (cell.innerText % n === 0) {
                cell.style.backgroundColor = "yellow";
            } else {
                cell.style.backgroundColor = "white";
            }
        }
    }
}
/*
    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            const td = table.rows[i].cells[j];
            if (td.innerText % n === 0) {
                td.style.backgroundColor = "yellow";
            } else {
                td.style.backgroundColor = "white";
            }
        }
    }
*/
const input = document.querySelector("input");
input.addEventListener("input", handleInput);

// 3. Amikor egy cellára kattintunk, írd ki
// a konzolra az osztóit! Használj delegálást!
// -> ne minden cellához legyen külön eseménykezelő
// Clean code: minden függvény egy feladatot kell megoldjon (de azt hibátlanul)
function handleClick(e) {
    if (!e.target.matches("td")) return;
    const td = e.target; // eseményt kiváltó objektum
    const n = parseInt(td.innerText);
    let s = "1";
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            s += `, ${i}`;
        }
    }
    console.log(s);
}
table.addEventListener("click", handleClick);

// 4. Ha 1-től 9-ig lenyomunk egy billentyűt
// a vele osztható cellák kapjanak 3px vastag szegélyt.
function handlePress(e) {
    console.log(e.key);
    // HF (péntekre)
}
document.addEventListener("keyup", handlePress);