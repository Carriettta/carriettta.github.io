let $game = document.querySelector("#game");

function drawDot() {
    var $span = document.createElement("span");
    $game.appendChild($span);
    $span.setAttribute("class", "dot");
}
drawDot();
drawDot();