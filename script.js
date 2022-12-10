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
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Choose Rock/Paper/Scissors!").toLowerCase();
        let computerSelection = getComputerChoice();
        while (!checkInput(playerSelection)){
            console.log("Wrong Input!");
            playerSelection = prompt("Choose again!");
        }
        console.log(playRound(playerSelection, computerSelection));

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

    


