class Dot {
    constructor() {
        this.availableColors = ['red', 'blue']
        this.color = "";
        this.setRandomColor();
        this.selected = false;
        Dot.prototype.dotCount += 1;
        this.dotSerialNumber = Dot.prototype.dotCount;
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

Dot.prototype.dotCount = 0;

class Board {
    constructor() {
        this.boardSize = 5;
        this.dots = [];
        for (let i = 0; i < this.boardSize; i++) {
            this.dots.push([]);
            for (let j = 0; j < this.boardSize; j++) {
                this.dots[i][j] = new Dot();
            }
        }
        this.selectionChain = [];
    }
    removeDot(x, y) {
        this.dots[x, y] = null;
    }
    slideDownFrom(rIndex, cIndex) {
        for (let currRow = rIndex - 1; currRow >= 0; currRow--) {
            this.dots[currRow + 1][cIndex] = this.dots[currRow][cIndex];
        }
    }
    isAdjacentTo(x1, y1, x2, y2) {
        if (
            x1 === x2 && y1 === y2 - 1 ||
            x1 === x2 && y1 === y2 + 1 ||
            x1 === x2 + 1 && y1 === y2 ||
            x1 === x2 - 1 && y1 === y2
        ) {
            return true
        }
    }
    addSelection(x, y) {
        this.selectionChain.push([]);
        this.selectionChain.push(x, y)
    }
    // canBeSelected(x, y) {
    //     if (selectionChain === []) {
    //         return true;
    //     } else if (
    //         selectionChain !== [] &&
    //         this.isAdjacentTo() === true &&
    //         this.dots[x, y] === this.selectionChain[]
    //     ) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
}