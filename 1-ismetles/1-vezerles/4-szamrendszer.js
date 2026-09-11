// Átváltja "n" számot 10-ből 2-es számrendszerbe.
function atvalt(n) {
    if (n===0) return 0;
    let bin = "";  
    while ( n !== 0 ) {    
        bin = (n % 2) + bin;
        n = parseInt(n / 2);
    }
    return parseInt(bin);
}

function atvaltGonosz(n) {
    return parseInt(n.toString(2));
}

atvalt(5) === 101
atvalt(22) === 10110
atvalt(17531) === 100010001111011
