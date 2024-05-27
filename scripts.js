let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 3;

document.getElementById('attemptsLeft').textContent = `Attempts left: ${attempts}`;

function makeGuess() {
    let userGuess = document.getElementById('guessInput').value;
    
    if (!userGuess || userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        document.getElementById('feedback').textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    userGuess = Number(userGuess);

    attempts--;

    if (userGuess === randomNumber) {
        document.getElementById('feedback').textContent = `Congratulations! You guessed the number ${randomNumber}.`;
        document.getElementById('attemptsLeft').textContent = '';
    } else if (attempts === 0) {
        document.getElementById('feedback').textContent = `Sorry, you've run out of attempts. The number was ${randomNumber}.`;
        document.getElementById('attemptsLeft').textContent = '';
    } else {
        if (userGuess < randomNumber) {
            document.getElementById('feedback').textContent = 'Too low!';
        } else {
            document.getElementById('feedback').textContent = 'Too high!';
        }
        document.getElementById('attemptsLeft').textContent = `Attempts left: ${attempts}`;
    }

    document.getElementById('guessInput').value = '';
}
