const gameBGmusic = new Audio('assets/bgmusic.mp3');
const gameOverSound = new Audio('assets/gameover.mp3');
const gameWinSound = new Audio('assets/gamewin.mp3');
const userTurn = new Audio('assets/userTurn.mp3');

var turn = 0;
var gameOver = false;
const gameWins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let TurnChange = () => {
    return (turn == 0) ? "X" : 0;
}

let checkGameWin = () => {
    let boxes = document.querySelectorAll(".space");
    gameWins.forEach(e => {
        if ((boxes[e[0]].innerHTML === boxes[e[1]].innerHTML) && (boxes[e[1]].innerHTML === boxes[e[2]].innerHTML) && (boxes[e[0]].innerHTML !== "")) {
            console.log(boxes[e[0]].innerHTML);
            gameOver = true;
            boxes[e[0]].classList.add("winbox");
            boxes[e[1]].classList.add("winbox");
            boxes[e[2]].classList.add("winbox");
        }
    });
}

let box = document.querySelectorAll(".space");
box.forEach(element => {
    element.addEventListener('click', (e) => {
        if (gameOver == false) {
            if (e.target.classList.contains('pointer')) {
                e.target.innerHTML = turn;
                checkGameWin();
            }
            e.target.classList.remove("pointer");
            turn = TurnChange();
        }
    });
});
