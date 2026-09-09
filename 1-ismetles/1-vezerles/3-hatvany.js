// Az "a" alapot a "k" kitevőre emeljük! (k egész)
function hatvany(a, k) {
    let result = 1;
    for (let i = 0; i < Math.abs(k); i++) {
        if (k > 0) {
            result *= a;
        } else {
            result /= a;
        }
    }
    return result;
}

function hatvanyD(a, k) {
    if (k < 0) return 1 / hatvanyD(a, -k);
    let result = 1;
    for (let i = 0; i < k; i++) {
        result *= a;
    }
    return result;
}

function hatvanyGonosz(a, k) {
    return Math.pow(a, k);
}

function hatvanyLeggonoszabb(a, k) {
    return a**k;
}

hatvany(2, 3) === 8
hatvany(5, 0) === 1
hatvany(2, -1) === 0.5
hatvany(2, -3) === 0.125
