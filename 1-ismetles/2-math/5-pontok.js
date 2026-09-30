// b-a+1: intervallum hossza
// a: minimum érték
function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1)) + a;
}

// 1. Generáljunk 1000 pontot az origo középpontú,
// 100 egység oldalú négyzetben (oldalát is generálhatjuk)!
function generate() {
    const points = [];
    for (let i = 0; i < 1000; i++) {
        const x = randint(-50, 50); // Math.floor(Math.random() * 101) - 50
        const y = randint(-50, 50);
        // const point = new Point(x, y);
        const p = {x, y};
        points.push(p);
    }
    return points;
}

// 2. Add meg azokat a pontokat, amelyek az I. síknegyedbe esnek!
//    Kiválogatás tétel
function b() {
    const selected = [];
    const points = generate();
    for (const p of points) {
        if (p.x > 0 && p.y > 0) {
            selected.push(p);
        }
    }
    return selected;
}

// 3. A pontok hány százaléka fedhető le az origo középpontú,
//    100 egység átmérőjű körrel?
//    Megszámolás
function c() {
    let count = 0; // Hány pont esik a körön belülre?
    const origo = new Point(0, 0);
    const points = generate();
    for (const p of points) {
        if (distance(origo, p) <= 50) {
            count++;
        }
    }
    return (count / points.length * 100).toFixed(1) + "%";
}

// 4. Melyik pont van legközelebb az origohoz?
//    Minimum-kiválasztás
function d() {
    const points = generate();
    const origo = new Point(0, 0);
    let closest = points[0];
    for (const point of points) {
        if (distance(point, origo) < distance(closest, origo)) {
            closest = point;
        }
    }
    return closest;
}

// 5. Van-e olyan pont, amely az x + y = 42 egyenesre esik?
//    Eldöntés -> true, false
function e() {
    const points = generate();
    let i = 0;
    while (i < points.length && !(points[i].x + points[i].y === 42)) {
        i++;
    }
    if (i < points.length) {
        return points[i]; // object
    }
    return "Nincs ilyen pont."; // string
}