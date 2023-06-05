const btn_cmnEl = document.querySelectorAll(".btn_cmn");

const ans_boxEl = document.querySelector(".ans_box");

const infoEl = document.getElementById("info");

const attemptsEl = document.getElementById("attempts");

const scoreEl = document.getElementById("score");

const restartBtnEl = document.querySelector(".restart_btn");

const inputRedeemEl = document.querySelector(".input_redeem")

const generateRandomNum = (min, max) => Math.trunc(Math.random(max - min) * max) + 1;

// application data:

const winCount = 2;
let attemptsRemaining = 30, correctGuesses = 0, gameOver = false, highScore = 0, redeemCode = "";

function init() {
    inputRedeemEl.value = "";

    correctGuesses = 0;

    attemptsRemaining = 30;
    attemptsEl.textContent = attemptsRemaining;

    ans_boxEl.textContent = "?";
    infoEl.textContent = "Start the game by clicking a no...";

    gameOver = false;
    ans_boxEl.style.backgroundImage = "linear-gradient(to bottom right, rgb(38, 43, 51), rgb(117, 105, 115),rgb(198, 109, 77))"
    ans_boxEl.style.backgroundColor = ""
    ans_boxEl.style.color = "white"
    inputRedeemEl.style.opacity = "0";
}

init()

for (let i = 0; i < btn_cmnEl.length; i++) {
    btn_cmnEl[i].addEventListener("click", () => {

        if (gameOver) return

        attemptsRemaining--;
        attemptsEl.textContent = attemptsRemaining;

        if (attemptsRemaining === 0) {
            gameOver = true;
            infoEl.textContent = "Out of attempts, restart the game.";
            ans_boxEl.style.backgroundImage = "none"
            ans_boxEl.style.backgroundColor = "rgba(255, 0, 0, .5)"
            ans_boxEl.style.color = "black"
            return;
        }

        ans_boxEl.textContent = generateRandomNum(1, 10)
        // console.log(`${ans_boxEl.textContent} generated randomly`);

        const btnClicked = btn_cmnEl[i].textContent;
        // console.log(`when ${btnClicked} was clicked`);

        if (ans_boxEl.textContent === btnClicked) {
            infoEl.textContent = "Correct prediction :)"
            correctGuesses++;

            redeemCode += btnClicked + ",";

            if (correctGuesses === winCount) {
                infoEl.textContent = "You won!!!";
                gameOver = true;
                ans_boxEl.style.backgroundImage = "none";
                ans_boxEl.style.backgroundColor = "rgba(0, 255, 0, .5)";
                ans_boxEl.style.color = "black";
                setTimeout(() => {
                    ans_boxEl.textContent = "?";
                }, 650)
                inputRedeemEl.style.opacity = "1";

                if (attemptsRemaining > highScore) {
                    scoreEl.textContent = attemptsRemaining;
                    highScore = attemptsRemaining;
                }
            }
        } else {
            infoEl.textContent = "Wrong Prediction :(";
        }
    })
}

restartBtnEl.addEventListener("click", () => {

    const inputValue = inputRedeemEl.value;

    redeemCode = redeemCode.slice(0, redeemCode.length - 1);

    if(inputValue === redeemCode) {

        highScore++;

        scoreEl.textContent = highScore;
        
    }
    
    init()
})