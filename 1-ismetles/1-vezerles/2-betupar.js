// Számoljuk meg, hogy "a" betűt hányszor követ "b".
function countABpairs(s) {
    let count = 0;
    for (let i = 0; i < s.length-1; i++) {
        if (s[i] === 'a' && s[i+1] === 'b') {
            count++;
        }
    }
    return count;
}

function countABpairs2(s) {
    return s.split("ab").length-1;
}

function countABpairs3(s) {
    return (s.match(/ab/g) || []).length;
}

countABpairs("abab") === 2
countABpairs("abba") === 1
countABpairs("babbbabbabab") === 4
countABpairs("baba") === 1

countABpairs2("abab") === 2
countABpairs2("abba") === 1
countABpairs2("babbbabbabab") === 4
countABpairs2("baba") === 1

countABpairs3("abab") === 2
countABpairs3("abba") === 1
countABpairs3("babbbabbabab") === 4
countABpairs3("baba") === 1
countABpairs3("dcbc") === 0
countABpairs3("") === 0