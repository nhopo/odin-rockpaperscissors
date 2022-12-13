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

function game(){
    const rounds = 2;
    let playerSelection, computerSelection;
    let playerScore = 0, computerScore = 0;
    let i = 1;
    let roundResult;
    const pScore = document.createElement('p');
    const pResult = document.createElement('p');

    buttons.forEach(button => button.addEventListener('click', () => {
        
        if(i <= rounds){
            const pRound = document.createElement('p');
            
            computerSelection = getComputerChoice();
            playerSelection = button.id;
    
            roundResult = playRound(playerSelection, computerSelection);
    
            if (!checkDraw(roundResult)){
                if (roundResult.includes("win")){
                    playerScore ++;
                } else if (roundResult.includes("lose")){
                    computerScore++;
                }
                pRound.textContent = `ROUND ${i}: ${roundResult}`;
                i++;
            } else {
                pRound.textContent = "It's a draw. Choose again!"
            }
            gameResults.appendChild(pRound);
        }
        else {
            pScore.textContent = `YOUR SCORE: ${playerScore} COM'S SCORE: ${computerScore}`;
            gameResults.appendChild(pScore);
            if (playerScore > computerScore){
                pResult.textContent = 'You won!';
            } else if (playerScore == computerScore) {
                pResult.textContent = 'The game ends in ties.';
            } else {
                pResult.textContent = 'You lost...';
            }
            gameResults.appendChild(pResult);
            return;
        }
    }));
}

const buttons = document.querySelectorAll('button');
const gameResults = document.querySelector('#results');

game();


    


