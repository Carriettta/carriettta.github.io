let dot = new Dot();
let board = new Board();
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
            board.select(this.getAttribute('x'), this.getAttribute('y'));
            drawBoard(board);
        }
        $span.onmouseover = function () {
            if (mousePressed === true) {
                board.select(this.getAttribute('x'), this.getAttribute('y'));
                drawBoard(board);
            }
        }
        $span.onmouseup = function () {
            mousePressed = false
            board.endRound();
            drawBoard(board);
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
drawBoard(board);

document.querySelector('#endRound').onclick = function () {
    board.endRound();
    drawBoard(board);
}
document.querySelector('#newGame').onclick = function () {

}

document.querySelector('#actualRound').innerHTML = game.actualRound;
document.querySelector('#maxRounds').innerHTML = game.maxRounds;
document.querySelector('#score').innerHTML = game.score;