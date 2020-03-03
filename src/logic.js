class Dot {
    constructor() {
        this.availableColors = ['red', 'blue']
        this.color = "";
        this.setRandomColor();
        this.selected = false;
        // Dot.prototype.dotCount += 1;
        // this.dotSerialNumber = Dot.prototype.dotCount;
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
// Dot.prototype.dotCount = 0;

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
        this.selectionChain = {};
    }
    removeDot(x, y) {
        this.dots[x][y] = null;
    }
    findDotAbove(x, y) {
        for (let yy = y - 1; yy >= 0; yy--) {
            if (this.dots[x, yy] != null) {
                return yy;
            }
        }
    }
    falldown(x, y) {
        // let theDot = this.dots[x][y];
        // this.dots[x][y] = null;
        // this.dots[x+1][y] = theDot;
        
        let yy = this.findDotAbove(x, y);
        if (yy != null) {
            this.dots[x][y] = this.dots[x][yy];
            this.dots[x][yy] = null;
        } else {
            this.dots[x][y] = new Dot();
        }
    }
    everythingFalls() {
        for (let x = this.boardSize; x >= 0; x--) {
            for (let y = this.boardSize; y >= 0; y--) {
                falldown(x, y)
            }
        }
    }
    // slideDownFrom(rIndex, cIndex) {
    //     for (let currRow = rIndex - 1; currRow >= 0; currRow--) {
    //         this.dots[currRow + 1][cIndex] = this.dots[currRow][cIndex];
    //     }
    // }
    isAdjacentTo(x1, y1, x2, y2) {
        if (
            x1 === x2 && y1 === y2 - 1 ||
            x1 === x2 && y1 === y2 + 1 ||
            x1 === x2 + 1 && y1 === y2 ||
            x1 === x2 - 1 && y1 === y2
        ) {
            return true
        } else {
            return false
        }
    }
    addSelection(x, y) {
        this.selectionChain.push({
            "x": x,
            "y": y,
            "dot": this.dots[x][y]
        })
    }
    canBeSelected(x, y) {
        if (selectionChain === []) {
            return true;
        } else if (
            selectionChain !== [] &&
            this.isAdjacentTo() === true &&
            this.dots[x][y].color === selectionChain.peek().color &&
            this.selectionChain.includes(this.dots[x, y])
        ) {
            return true;
        } else if (this.dots[x][y].selected === true) {
            return false;
        } else {
            return false;
        }
    }
    select(x, y) {
        if (this.canBeSelected(x, y) === true) {
            this.addSelection(x, y);
            this.dots[x][y].selected = true;
        }
    }
    endRound() {
        if (this.selectionChain.length >= 2) {
            for (let i = 0; i < this.selectionChain.length; i++) {
                let dot = this.selectionChain[i];
                this.removeDot(dot.x, dot.y)
            }
            everythingFalls()
        }
    }
}