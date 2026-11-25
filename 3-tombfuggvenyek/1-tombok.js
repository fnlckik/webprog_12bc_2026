const a = [5, 2, 3];

a.pop(); // Kiveszi az utolsót (visszatér vele) - [5, 2]
a.push(7); // Végére teszi - [5, 2, 7]

a.shift(); // Kiveszi az elsőt (visszatér vele) - [2, 7]
a.unshift(11); // Elejére teszi - [11, 2, 7]

console.log("Módosítások:", a);

// 1. Egyesítsük a tömböket!
const b = [3, 4, 5];
const x = [6, 7];
// a + b nem jó (string lesz)
const c = a.concat(b, x); // [11, 2, 7, 3, 4, 5]
const d = [...a, ...b, ...x];
console.log("Összefésülve:", c, d);

// 2. Résztömb: 2. elemtől 4. elemig (1. indextől 3. indexig)
const e = d.slice(1, 4); // indexekre, alsó határ inklúzív, felső határ exclusive
// d.splice(1, 3); // Hanyadiktól? Hányat távolítsunk el?
d.splice(0, d.length); // tömb ürítése
console.log("Résztömb:", e, d);

// 3. Szöveggé alakítás: elválasztó szóköz legyen
const f = e.join(" ");
console.log("Szöveggé:", f);
const s = "1 2 3 4 5";
const t = s.split(" "); // darabolás
console.log("Darabolás: ", t);
