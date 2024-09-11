const body = document.body

let currentPlayer = 1;
let currentScore = [0, 0]
let totalWins = [0, 0]
let timer = 10;
let winningScore = 0;
let gameActive = false;

const pointValue = document.querySelector(`#winning-score`)
const dice1 = document.querySelector(`#dice-1`)
const dice2 = document.querySelector(`#dice-2`)
const player1 = document.querySelector(`#score-1`)
const player2 = document.querySelector(`#score-2`)
const timer1 = document.querySelector(`#timer-1`)
const timer2 = document.querySelector(`#timer-2`)
const title = document.querySelector(`#game-status`)
const roleDiceBtn = document.querySelector(`#roll-dice`)
const newGameBtn = document.querySelector(`#new-game`)

newGameBtn.addEventListener(`click`, startGame)
function initGame() {
    pointValue.value = ``;
    dice1.textContent = 1;
    dice2.textContent = 1;
    player1.textContent = 0;
    player2.textContent = 0;
    // לא לשכוח לטפל בזיכרון
}
const diceThrowing = document.getElementById('roll-dice');

diceThrowing.addEventListener('click', function() {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    dice1.textContent = randomNumber1;
    dice2.textContent = randomNumber2;
});

function startGame() {
    timerRun(),
    initGame()
}

function timerRun() {
    let timerUp = currentPlayer === 1 ? timer1 : timer2;
    let countdown = 10;
    const timer = setInterval(() => {
        if (countdown >= 0) {
            timerUp.textContent = countdown;
            countdown--;
        } else {
            clearInterval(timer);
            currentPlayer = currentPlayer === 1 ? 2 : 1;
            timerRun();
        }
    }, 1000)
}

function updateScore() { }

function clearTimer() { }

function checkWiner() { }

function switchPlayer() { }

function saveWins() { }