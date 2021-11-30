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
let playerPoints = 0;
let computerPoints = 0;
let tiePoints = 0;

function compChoose() {
    // Selects a random number for the computer player 0-2, 0 == rock, 1 == paper, 2 == scissors
    compChoice = Math.floor(Math.random() * 3);
    return compChoice;
}

function playerChoose(e) {
    // Collects the player choice as a text string and returns 0 for rock, 1 for paper, 2 for scissors. Function will repeat if invalid answer.

    playerChoice = e.srcElement.className;

    switch (playerChoice) {
        case 'rock': playerChoice = 0;
            return playerChoice;

        case 'paper': playerChoice = 1;
            return playerChoice;

        case 'scissors': playerChoice = 2;
            return playerChoice;

        default: playerChoice = 'error';
            return playerChoice; // Handles error if clicking something other than button
    }
}

function playRound(e) {

    compChoose();
    playerChoose(e);

    if (playerChoice === 'error') return;

    // Runs if player and computer pick the same choice
    if (playerChoice === compChoice) {
        updatePoints('tie');
        return;
    }
    // Runs if player wins with scissors vs paper, or with paper vs rock
    else if (playerChoice - compChoice === 1) {
        updatePoints('playerWins');
        return;
    }
    // Runs if computer wins with scissors vs paper, or with paper vs rock
    else if (compChoice - playerChoice === 1) {
        updatePoints('computerWins');
        return;
    }
    // Runs if player wins with rock vs scissors
    else if (playerChoice - compChoice === -2) {
        updatePoints('playerWins');
        return;
    }
    // Runs if computer wins with rock vs scissors
    else if (compChoice - playerChoice === -2) {
        updatePoints('computerWins');
        return;
    }
    // This should not happen
    else return;
}

function updatePoints(roundResult) {
    if (roundResult === 'playerWins') {
        playerPoints++;
        playerScore.textContent = `Player: ${playerPoints}`;
    }
    else if (roundResult === 'computerWins') {
        computerPoints++;
        computerScore.textContent = `Computer: ${computerPoints}`
    }
    else if (roundResult === 'tie') {
        tiePoints++;
        tieScore.textContent = `Ties: ${computerPoints}`
    }
    if (playerPoints === 5) {
        alert('YOU WON!!!')
    }
    else if (computerPoints === 5) {
        alert('YOU LOST!!!')
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => addEventListener('click', playRound));

const playerScore = document.querySelector('.player-score');
playerScore.textContent = `Player: ${playerPoints}`;
const computerScore = document.querySelector('.computer-score');
computerScore.textContent = `Computer: ${computerPoints}`;
const tieScore = document.querySelector('.tie-score');
tieScore.textContent = `Ties: ${tiePoints}`;