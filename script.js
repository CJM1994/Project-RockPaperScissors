// Rock Paper Scissors

// Generate random selection of rock paper or scissors for opponent that is hidden from user

// Allow user to make selection of either rock paper or scissors

// Compare users selection to random selection determined earlier
// If selection is the same it is a tie and reset selections
// if selection is different determine winner and add point to winner and reset selections
// check if either player has 5 points, when this is reached declare winner and overall gamestate

function compChoose() {
    // Selects a random number for the computer player 0-2, 0 == rock, 1 == paper, 2 == scissors
    let compChoice = Math.floor(Math.random() * 3);
    return compChoice;
}

function playerChoose() {
    // Collects the player choice as a text string and returns 0 for rock, 1 for paper, 2 for scissors. Function will repeat if invalid answer.
    let playerChoice = prompt('Enter your choice: Rock, Paper, Scissors').toLowerCase();

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