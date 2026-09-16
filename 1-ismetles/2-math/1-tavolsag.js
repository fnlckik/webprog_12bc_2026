function distance(A, B) {
    const first = Math.pow(B.x - A.x, 2); // power: hatvány
    const second = Math.pow(B.y - A.y, 2);
    return Math.sqrt(first + second);
}

const A = {x: 0, y: 0};
const B = {x: 3, y: 4};
const C = {x: 11, y: 10};
const D = new Point(5, 7);
