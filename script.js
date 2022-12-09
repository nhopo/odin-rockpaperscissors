/* create a function that represents computers choice:
 returns rock/paper/scissors */

function getComputerChoice(){
    const choice = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "It's a draw!"
    }
    if (playerSelection == "rock" || playerSelection == "ROCK" || playerSelection == "Rock"){
        if (computerSelection == "paper"){
            return "You lose! Paper beats Rock!";
        } else if (computerSelection == "scissors"){
            return "You win! Rock beats scissors!";
        }
    }
    if (playerSelection == "paper" || playerSelection == "Paper" || playerSelection == "PAPER"){
        if (computerSelection == "rock"){
            return "You win! Paper beats Rock!";
        } else if (computerSelection == "scissors"){
            return "You lose! Scissors beats paper!";
        }
    }
    if (playerSelection == "scissors" || playerSelection == "Scissors" || playerSelection == "SCISSORS"){
        if (computerSelection == "rock"){
            return "You lose! Rock beats Scissors!";
        } else if (computerSelection == "paper"){
            return "You win! Scissors beats Paper!";
        }
    }
const playerSelection = "rock";
const computerSelection = getComputerChoice();
    


