// Rock Paper Scissors

// GENERAL OUTLINE---------------------------------------------------
// Generate random selection of rock paper or scissors for opponent that is hidden from user
// Allow user to make selection of either rock paper or scissors
// Compare users selection to random selection determined earlier
// If selection is the same it is a tie and reset selections
// if selection is different determine winner and add point to winner and reset selections
// check if either player has 5 points, when this is reached declare winner and overall gamestate
// END OF OUTLINE----------------------------------------------------

// Rock == 0, Paper == 1, Scissors == 2
let playerChoice = 0;
let compChoice = 0;

function compChoose() {
    // Selects a random number for the computer player 0-2, 0 == rock, 1 == paper, 2 == scissors
    compChoice = Math.floor(Math.random() * 3);
    return compChoice;
}

function playerChoose() {
    // Collects the player choice as a text string and returns 0 for rock, 1 for paper, 2 for scissors. Function will repeat if invalid answer.
    playerChoice = prompt('Enter your choice: Rock, Paper, Scissors').toLowerCase();

    switch (playerChoice) {
        case 'rock': playerChoice = 0;
            return playerChoice;

        case 'paper': playerChoice = 1;
            return playerChoice;

        case 'scissors': playerChoice = 2;
            return playerChoice;

        default: alert('Invalid entry, please choose again!'); playerChoose();
            break;
    }
}

function playRound() {

    compChoose();
    playerChoose();

    // Runs if player and computer pick the same choice
    if (playerChoice === compChoice) {
        return ('tie');
    }
    // Runs if player wins with scissors vs paper, or with paper vs rock
    else if (playerChoice - compChoice === 1) {
        return ('playerWins');
    }
    // Runs if computer wins with scissors vs paper, or with paper vs rock
    else if (compChoice - playerChoice === 1) {
        return ('computerWins');
    }
    // Runs if player wins with rock vs scissors
    else if (playerChoice - compChoice === -2) {
        return ('playerWins');
    }
    // Runs if computer wins with rock vs scissors
    else if (compChoice - playerChoice === -2) {
        return ('computerWins');
    }
    // This should not happen
    else {
        return ('error');
    }

}

function playGame() {

    let playerPoints = 0; // Tracks player's points in a 5 round game
    let computerPoints = 0; // Tracks computer's points in a 5 round game
    let result = ''; // Stores result of each round to determine who to give points to

    for (let i = 0; i < 5; i++) {

        result = playRound();

        if (result === 'playerWins') {
            playerPoints++;
            console.log('Player Wins Round!');
            console.log('Your score is ' + playerPoints + '!');
            console.log('Your opponents score is ' + computerPoints + '!');
        }
        else if (result === 'computerWins') {
            computerPoints++;
            console.log('Computer Wins Round!');
            console.log('Your score is ' + playerPoints + '!');
            console.log('Your opponents score is ' + computerPoints + '!');
        }
        else {
            console.log('Tie Round!');
            console.log('Your score is ' + playerPoints + '!');
            console.log('Your opponents score is ' + computerPoints + '!');
        }
    }

    if (playerPoints > computerPoints) {
        alert('CONGRATULATIONS! YOU ARE A WINNER!');
    }
    else if (computerPoints > playerPoints) {
        alert('TOO BAD! YOU ARE A LOSER!');
    }
    else {
        alert('you tied... but at least you tried...')
    }

}

playGame();