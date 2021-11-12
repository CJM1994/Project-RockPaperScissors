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
    console.log(compChoice);
}

function playerChoose() {
    let playerChoice = 
}