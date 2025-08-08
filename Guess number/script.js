//generate random number
let randomNumb = Math.floor(Math.random() * 100 + 1);
// console.log(randomNumb)

//select element
let body = document.querySelector('body');
let userInput = document.querySelector('.number'); //input field
let submit = document.querySelector('.bttn');
let displayGuess = document.querySelector('.prevGuess'); //show guess
let displayAttempts = document.querySelector('.attemptsLeft'); //show attempts
let gameEnds = document.querySelector('.play-again'); //srestart button



let attempts = 5;
let prevGuesses = [];

let playgame = true;

//show answer (element)
let result = document.querySelector('.result-msg');

//clickEvent
submit.addEventListener('click', function (e) {
    e.preventDefault(); //prevent default behaviour
    const guess = parseInt(userInput.value); //input from user

    //  Check if it's a valid number
    if (isNaN(guess) || guess < 1 || guess > 100) {
        result.textContent = "⛔ Please enter a number between 1 and 100.";
        userInput.value = "";
        return; // exit early, no game check
    }

    if (!playgame) return;

    // else If it's a valid number
    prevGuesses.push(guess);
    attempts--;

    displayGuess.textContent = `Previous guesses: ${prevGuesses.join(', ')}`;
    displayAttempts.textContent = `Attempts left: ${attempts}`;


    if (guess === randomNumb) {
        result.innerHTML = `🎉 Right Guess! The number was ${randomNumb}`;
        gameOver();
    }
    else if (attempts === 0) {
        result.innerHTML = `💥 Game Over! The number was ${randomNumb}`;
        gameOver();
    }
    else {
        result.innerHTML = `❌ Wrong Guess! Try Again`;
        body.style.backgroundColor ='#1533b5ff'
    }
    userInput.value = "";
});

//play again button
gameEnds.addEventListener('click', newGame);

function gameOver() { //game ends
    body.style.backgroundColor = '#0f962fff';
    userInput.disabled = true;
    submit.disabled = true;
    gameEnds.style.display = "inline-block"; // Show the Play Again button
}

function newGame() {
    randomNumb = Math.floor(Math.random() * 100 + 1);
    attempts = 5;
    prevGuesses = [];
    playgame = true;

    result.textContent = "";
    displayGuess.textContent = "";
    displayAttempts.textContent = "";
    userInput.disabled = false;
    submit.disabled = false;
    userInput.value = "";
    gameEnds.style.display = "none"; // Hide the button
}