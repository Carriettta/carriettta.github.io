class Dot {
    constructor() {
        this.availableColors = ['red', 'blue']
        this.color = "";
        this.setRandomColor();

        this.selected = false;
    }
    setRandomColor() {
        this.color = this.availableColors[Math.floor(Math.random() * this.availableColors.length)];
    }
    getColor() {
        return this.color;
    }
    setSelected() {
        if (this.selected === false) {
            return this.selected = true;
        } else {
            return this.selected = false;
        }
    }
}

class Board {
    constructor() {
        this.boardSize = 5;
        this.dots = [];
        for (let i = 0; i <= this.boardSize; i++) {
            for (let j = 0; j <= this.boardSize; j++) {
                new Dot;
            }
        }
    }

    // select(anArray) {

    // }
    // remove(anArray) {

    // }
    // move(anArray) {

    // }
}