class Dot {
    constructor() {
        this.availableColors = ['green', 'white', 'yellow']
        this.color = '';
        this.setRandomColor();
        this.selected = false;
    }
    setRandomColor() {
        this.color = this.availableColors[Math.floor(Math.random() * this.availableColors.length)];
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
        this.boardSize = 9;
        this.dots = new Array();
        for (let i = 0; i < this.boardSize; i++) {
            this.dots.push(new Array());
            for (let j = 0; j < this.boardSize; j++) {
                this.dots[i][j] = new Dot();
            }
        }
        this.selectionChain = new Array();
        this.removedDotCount = 0;
    }
    removeDot(x, y) {
        this.dots[x][y] = null;
        this.removedDotCount++;
    }
    findDotAbove(x, y) {
        for (let yy = y - 1; yy >= 0; yy--) {
            if (this.dots[x][yy] != null) {
                return yy;
            }
        }
    }
    // drops the dot above INTO x,y space
    falldown(x, y) {
        if (this.dots[x][y] === null) {
            let yy = this.findDotAbove(x, y);
            if (yy != null) {
                this.dots[x][y] = this.dots[x][yy];
                this.dots[x][yy] = null;
            } else {
                this.dots[x][y] = new Dot();
            }
        }
    }
    everythingFalls() {
        for (let x = this.boardSize - 1; x >= 0; x--) {
            for (let y = this.boardSize - 1; y >= 0; y--) {
                this.falldown(x, y)
            }
        }
    }
    isAdjacentTo(x1, y1, x2, y2) {
        x1 = parseInt(x1);
        x2 = parseInt(x2);
        y1 = parseInt(y1);
        y2 = parseInt(y2);
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
            'x': x,
            'y': y,
            'dot': this.dots[x][y]
        })
    }
    canBeSelected(x, y) {
        if (this.selectionChain.length === 0) {
            return true;
        } else if (
            this.isAdjacentTo(x, y, this.selectionChain[this.selectionChain.length - 1].x,
                this.selectionChain[this.selectionChain.length - 1].y) === true &&
            this.dots[x][y].color === this.selectionChain[0].dot.color &&
            this.dots[x][y].selected === false
        ) {
            return true;
        } else if (this.dots[x][y].selected === true) {
            return false;
        } else {
            return false;
        }
    }
    isInChain(dot) {
        for (let i = 0; i < this.selectionChain.length - 2; i++) {
            if (this.selectionChain[i].dot === dot) {
                return true;
            }
        }
        return false;
    }

    removeAllOfColor(color) {
        for (let x = 0; x < this.boardSize; x++) {
            for (let y = 0; y < this.boardSize; y++) {
                if (this.dots[x][y].color === color) {
                    this.removeDot(x, y);
                }
            }
        }
    }
    select(x, y) {
        if (this.canBeSelected(x, y) === true) {
            this.addSelection(x, y);
            this.dots[x][y].selected = true;
        }
        let currentDot = this.dots[x][y];
        if (this.selectionChain.length > 2) {
            if ((currentDot.selected === true) && this.isInChain(currentDot)) {
                this.removeAllOfColor(currentDot.color);
            }
        }
        if (this.selectionChain.length > 1) {
            let twoBackInChain = this.selectionChain[this.selectionChain.length - 2].dot;
            if (currentDot == twoBackInChain) {
                let last = this.selectionChain.pop();
                this.dots[last.x][last.y].selected = false;
            }
        }
    }
    endRound() {
        let result = 0;
        if (this.selectionChain.length >= 2) {
            for (let i = 0; i < this.selectionChain.length; i++) {
                let dot = this.selectionChain[i]
                this.removeDot(dot.x, dot.y)
            }
            this.everythingFalls()
            this.selectionChain = new Array()
            result = this.removedDotCount;
            this.removedDotCount = 0;
        }
        if (this.selectionChain.length === 1) {
            this.dots[this.selectionChain[0].x][this.selectionChain[0].y].selected = false;
            this.selectionChain = new Array();
        }
        return result;
    }
}
class Game {
    constructor() {
        this.board = new Board()
        this.maxRounds = 10
        this.actualRound = 0
        this.score = 0
    }
    endRound() {
        let score = this.board.endRound();
        this.actualRound++;
        this.score = this.score + score * 10;
        if (this.maxRounds === this.actualRound) {
            refresh();
            alert(`Game over! Score: ${this.score}`)
            this.board = new Board()
            this.actualRound = 0;
            this.score = 0
        }
    }
}