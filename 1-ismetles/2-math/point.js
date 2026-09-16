class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // Balra forgatás 90 fokkal: (x; y) => (-y; x)
    /*
        const temp = this.x;
        this.x = -this.y;
        this.y = temp;
    */
    rotate() {
        [this.x, this.y] = [-this.y, this.x];
    }
}
