const gameBGmusic = new Audio('assets/bgMusic.mp3');
const gameWinSound = new Audio('assets/win.mp3');
const userTurn = new Audio('assets/click.wav');
const gameTieSound = new Audio('assets/noti.wav');
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
gameBGmusic.currentTime = 0;
gameBGmusic.volume = 0.5;
let TurnChange = ()=>{
    userTurn.currentTime = 0;
    userTurn.play();
    return (turn == 0) ? "X" : 0;
}

let checkGameWin = () => {
    let boxes = document.querySelectorAll(".space");
    gameWins.forEach(e => {
        if ((boxes[e[0]].innerHTML === boxes[e[1]].innerHTML) && (boxes[e[1]].innerHTML === boxes[e[2]].innerHTML) && (boxes[e[0]].innerHTML !== "")) {
            console.log(boxes[e[0]].innerHTML);
            document.querySelector('#restart > button').classList.remove('d-none');
            restartFun();
            gameBGmusic.pause();
            gameOver = true;
            gameWinSound.currentTime = 0;
            gameWinSound.play();
            boxes[e[0]].classList.add("winbox");
            boxes[e[1]].classList.add("winbox");
            boxes[e[2]].classList.add("winbox");
        }
    });
}
let checkGameTie = ()=>{
    let boxes = document.querySelectorAll(".space.pointer");
    if(boxes.length == 1 && gameOver == false){
        document.querySelector('#restart > button').classList.remove('d-none');
        restartFun();
        gameTieSound.currentTime = 0;
        gameOver = true;
        gameBGmusic.pause();
        gameTieSound.play();
        alert("Game Tie");
    }
}

let box = document.querySelectorAll(".space");
box.forEach(element => {
    element.addEventListener('click', (e) => {
        gameBGmusic.play();
        if (gameOver == false) {
            if (e.target.classList.contains('pointer')) {
                e.target.innerHTML = turn;
                checkGameWin();
                checkGameTie();
            }
            e.target.classList.remove("pointer");
            turn = TurnChange();
        }
    });
});
let restartFun = ()=>{
    let restart = document.getElementById('restart');
    restart.addEventListener('click', (e)=>{
        box.forEach(element => {
            console.log(element);
            gameOver = false;
            element.innerHTML ='';
            element.classList.remove('winbox');
            element.classList.add("pointer");
            e.target.classList.add('d-none');
        });
    });
}