// Math.random(): véletlen számot ad a [0; 1[-ról

// 1. Generáljunk 0-tól 10-ig!
// [0; 1[ => [0; 11[ => [0..10]
// 0-tól 10-ig => 11 féle szám
function rating() {
    return Math.floor(Math.random() * 11);
}

// 2. Generáljunk 1-től 6-ig!
// [0, 1[ * 6 => [0, 6[ = csonkolás => [0..5] = +1 => [1..6]
// [0, 1[ * 5 => [0, 5[ = csonkolás => [0..4] = +1 => [1..5]
function dice() {
    return Math.floor(Math.random() * 6) + 1;
}

// 3. Generáljunk 1-től n-ig!
function random(n) {
    return Math.floor(Math.random() * n) + 1;
}

// 4. Generáljunk 10-től 99-ig!
// Hány szám ez? 1-től 99-ig (99), de 1-től 9-ig (9) => 99 - 9 = 90
function digits() {
    return Math.floor(Math.random() * 90) + 10;
}

// 5. Generáljunk az [a..b] intervallumon!
// Hány szám ez: b - (a - 1) = b - a + 1
// Mi a legkisebb: a
function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1)) + a;
}