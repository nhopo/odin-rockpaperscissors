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
    else if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            return "You lose! Paper beats Rock!";
        } else if (computerSelection == "scissors"){
            return "You win! Rock beats scissors!";
        }
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            return "You win! Paper beats Rock!";
        } else if (computerSelection == "scissors"){
            return "You lose! Scissors beats paper!";
        }
    }
    else if (playerSelection == "scissors"){
        if (computerSelection == "rock"){
            return "You lose! Rock beats Scissors!";
        } else if (computerSelection == "paper"){
            return "You win! Scissors beats Paper!";
        }
    }
}

function checkDraw(roundResult){
    if (roundResult.includes("draw")) return true;
    else return false;
}

function getPlayerChoice(){
    let playerSelection = prompt("Choose Rock/Paper/Scissors!").toLowerCase();

    while (!checkInput(playerSelection)){
        console.log("Invalid Input! Choose again!");
        playerSelection = prompt("Choose Rock/Paper/Scissors!");
    }
    return playerSelection;
}

/* game() lets user choose five times. When user inputs falsy, user gets asked to input again. 
Keeps score and reports winner at the end  */
function game(){

    const rounds = 5;
    let playerSelection;
    let computerSelection;
    let result;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < rounds; i++){

        console.log(`ROUND ${i+1}`)

        do {
            playerSelection = getPlayerChoice();
            computerSelection = getComputerChoice();
            result = playRound(playerSelection, computerSelection);
            console.log(result);
        } while (checkDraw(result));

        if (result.includes("win")){
            playerScore ++;
        } else if (result.includes("lose")){
            computerScore++;
        }
    }
    
    console.log(`YOUR SCORE: ${playerScore}     COMPUTER'S SCORE: ${computerScore}`);

    if (playerScore > computerScore){
        console.log("You won this game!");
    } else if (playerScore == computerScore) {
        console.log("This game ends in draw!");
    } else {
        console.log("You lost this game!")
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

    


