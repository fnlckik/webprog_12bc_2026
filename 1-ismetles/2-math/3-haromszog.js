function triangle(a, b, c) {
    const s = (a + b + c) / 2;
    return Math.sqrt(s*(s-a)*(s-b)*(s-c));
}

function area(a, b, c) {
    const gamma = Math.acos((a*a + b*b - c*c)/(2*a*b));
    return a*b*Math.sin(gamma) / 2;
}

/*
    triangle(5, 5, 5) === 10.825317547305483;
    triangle(5, 12, 13) === 30;
    triangle(40, 70, 100) === 1092.8746497197196;
*/