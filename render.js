let dot = new Dot();
let game = new Game();

let $game = document.querySelector('#game');
let mousePressed = false;

function drawDot(dot, isLastDotInRow, x, y) {
    let $span = document.createElement('span');
    $span.classList.add('dot');
    if (dot !== null) {
        $span.classList.add(dot.color);
        if (dot.selected) {
            $span.classList.add('selected');
        }
        $span.setAttribute('x', x);
        $span.setAttribute('y', y);
        // $span.onclick = function () {
        //     board.select(this.getAttribute('x'), this.getAttribute('y'));
        //     drawBoard(board);
        // };
        $span.onmousedown = function () {
            mousePressed = true;
            game.board.select(this.getAttribute('x'), this.getAttribute('y'));
            refresh();
        }
        $span.onmouseover = function () {
            if (mousePressed === true) {
                game.board.select(this.getAttribute('x'), this.getAttribute('y'));
                refresh();
            }
        }
        $span.onmouseup = function () {
            mousePressed = false
            game.endRound();
            refresh();
        }
    }
    $game.appendChild($span);
    if (isLastDotInRow) {
        $game.appendChild(document.createElement('br'));
    }
}

function drawBoard(board) {
    $game.innerHTML = '';
    for (x = 0; x < board.boardSize; x++) {
        for (y = 0; y < board.boardSize; y++) {
            let lastDotInRow = (y == board.boardSize - 1);
            drawDot(board.dots[y][x], lastDotInRow, y, x);
        }
    }
}

function refresh() {
    document.querySelector('#actualRound').innerHTML = game.actualRound;
    document.querySelector('#maxRounds').innerHTML = game.maxRounds;
    document.querySelector('#score').innerHTML = game.score;

    drawBoard(game.board);
}
refresh();

document.querySelector("body").onmouseup = function () {
    console.log('mouseup')
    mousePressed = false
    game.endRound();
    refresh();
}