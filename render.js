let dot = new Dot();
let board = new Board();

let $game = document.querySelector('#game');


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
        $span.onclick = function () {
            board.select(this.getAttribute('x'), this.getAttribute('y'));
            drawBoard(board);
        };
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