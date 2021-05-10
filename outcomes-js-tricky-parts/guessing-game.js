function guessingGame() {
    let num = Math.floor(Math.random() * 100);
    let tries = 0;
    let won = false;
    return function game(guess) {
        if (won) return "The game is over, you already won!"
        if (guess === num) {
            tries++;
            won = true;
            return `You win! You found ${num} in ${tries} guesses.`;
        };
        if (guess > num) {
            tries++;
            return `${guess} is too high!`;
        };
        if (guess < num) {
            tries++;
            return `${guess} is too low!`;
        };
    };
};

module.exports = { guessingGame };
