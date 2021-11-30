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
}

function resetPoints() {
    playerPoints = 0;
    computerPoints = 0;
    tiePoints = 0;
    refreshScoreboard();
}

function refreshScoreboard() {
    playerScore.textContent = `Player: ${playerPoints}`;
    computerScore.textContent = `Computer: ${computerPoints}`
    tieScore.textContent = `Ties: ${tiePoints}`
}

function updatePoints(roundResult) {
    if (roundResult === 'playerWins') {
        playerPoints++;
        refreshScoreboard();
    }
    else if (roundResult === 'computerWins') {
        computerPoints++;
        refreshScoreboard();
    }
    else if (roundResult === 'tie') {
        tiePoints++;
        refreshScoreboard();
    }
    if (playerPoints === 5) {
        alert('YOU WON!!!')
        resetPoints();
    }
    else if (computerPoints === 5) {
        alert('YOU LOST!!!')
        resetPoints();
    }
}

const buttons = document.querySelectorAll('img');
buttons.forEach(button => addEventListener('click', playRound));

const playerScore = document.querySelector('.player-score');
playerScore.textContent = `Player: ${playerPoints}`;
const computerScore = document.querySelector('.computer-score');
computerScore.textContent = `Computer: ${computerPoints}`;
const tieScore = document.querySelector('.tie-score');
tieScore.textContent = `Ties: ${tiePoints}`;