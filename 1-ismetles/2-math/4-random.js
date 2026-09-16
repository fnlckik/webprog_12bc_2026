// Math.random(): véletlen számot ad a [0; 1[-ról

// [0; 1[ => [0; 10[ => [0..10]
// 0-tól 10-ig => 11 féle szám
function rating() {
    return Math.floor(Math.random() * 11);
}