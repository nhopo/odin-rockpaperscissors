/* create a function that represents computers choice:
 returns rock/paper/scissors */

function getComputerChoice(){
    const choice = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return `It's a draw! You both chose ${computerSelection}`;
    }
    if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            return "You lose! Paper beats Rock!";
        } else if (computerSelection == "scissors"){
            return "You win! Rock beats scissors!";
        }
    }
    if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            return "You win! Paper beats Rock!";
        } else if (computerSelection == "scissors"){
            return "You lose! Scissors beats paper!";
        }
    }
    if (playerSelection == "scissors"){
        if (computerSelection == "rock"){
            return "You lose! Rock beats Scissors!";
        } else if (computerSelection == "paper"){
            return "You win! Scissors beats Paper!";
        }
    }
}

/* game() lets user choose five times. When user inputs falsly, user gets asked to input again. 
Keeps score and reports winner at the end  */
function game(){

    const rounds = 5;
    let playerScore = 0;

    for (let i = 0; i < rounds; i++){
        let playerSelection = prompt("Choose Rock/Paper/Scissors!").toLowerCase();
        let computerSelection = getComputerChoice();
        while (!checkInput(playerSelection)){
            console.log("Wrong Input! Choose again!");
            playerSelection = prompt("Choose again!");
        }
        result = playRound(playerSelection, computerSelection)
        if (result.includes("win")){
            playerScore ++;
        }
        console.log(result);
    }

    let computerScore = rounds - playerScore;
    if (playerScore > computerScore){
        return console.log(`You won ${playerScore} out of ${rounds} rounds. You win the game!`);
    } else if (playerScore == computerScore) {
        return console.log(`You won ${playerScore} out of ${rounds} rounds. It's a draw!`);
    } else {
        return console.log(`You won ${playerScore} out of ${rounds} rounds. The Computer wins!`);
    }
}

function checkInput(playerSelection){
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"){
        return true;
    } else {
        return false;
    }
}

game();

    


