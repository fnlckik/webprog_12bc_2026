// poligon: sokszög (pontok tömbje)
function perimeter(poligon) {
    let s = 0;
    for (let i = 0; i < poligon.length - 1; i++) {
        s += distance(poligon[i], poligon[i+1]);
    }
    s += distance(poligon[0], poligon[poligon.length-1]);
    return s;
}

const poligon = [
    {x: 1, y: -1},
    {x: 4, y: 0},
    {x: 5, y: 3},
    {x: 3, y: 4},
    {x: -1, y: 2}
];
