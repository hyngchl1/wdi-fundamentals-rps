function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    return move || getInput();
}
function getComputerMove(move) {
    return move || randomPlay();
}


function getWinner(playerMove,computerMove) {
    var winner;
    
   if (playerMove === computerMove){
       console.log("it's a tie");
   } else if (playerMove === 'rock') {
     // played rock
         if (computerMove === 'scissors') {
             winner = 'player';
         } else {
             winner = 'computer';
            }
    } else if (playerMove === 'scissors') {
    // played scissors
           if (computerMove === 'paper') {
            winner = 'player';
           } else {
               winner = 'computer';
           }
    } else if (playerMove === 'paper') {
    // played paper
            if (computerMove === 'rock') {
                winner = 'player';
            } else {
                winner = 'computer';
            }
    }
   
   return winner;
    }
    
    
function playToFive() {
    console.log ("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    

    while (playerWins<5 && computerWins<5){
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        winner = getWinner(playerMove, computerMove); //^^^Changed this to assign winner to the getWinner function
            if (winner === 'player'){
                playerWins += 1;
            } else if (winner === 'computer') {
                computerWins += 1;
            } else if (winner === 'tie') {
                playerWins += 0;
                computerWins += 0;
            }
     console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
   
}
    

    
playToFive();
