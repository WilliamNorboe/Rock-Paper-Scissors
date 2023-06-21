
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch(choice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return -1;
    }
}

function rpsRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();
    let result;
    if(playerChoice == "rock" && computerChoice == "scissors"){
        result = "You Win! rock beats scissors"
    }
    else if(playerChoice == "paper" && computerChoice == "rock"){
        result = "You Win! paper beats rock"
    }
    else if(playerChoice == "scissors" && computerChoice == "paper"){
        result = "You Win! scissors beats paper"
    }
    else if(playerChoice == "scissors" && computerChoice == "rock"){
        result = "You Lose! rock beats scissors"
    }
    else if(playerChoice == "rock" && computerChoice == "paper"){
        result = "You Lose! paper beats rock"
    }
    else if(playerChoice == "paper" && computerChoice == "scissors"){
        result = "You Lose! scissors beats paper"
    }
    else if(playerChoice == computerChoice){ // draw
        result = "Tie! You both chose " + playerChoice;
    }
    else{
        result = "Oops Somthing went wrong";
    }
    return result
}

let humanScore = 0;
let computerScore = 0;
const human = document.querySelector('#humanScore');
const com = document.querySelector('#comScore');
const roundResult = document.querySelector('#result');
const buttons = document.querySelectorAll('button');

const display = document.querySelector('#gameBoard');
const body = document.querySelector('body');
for(let i = 0; i < 3; ++i){
    buttons[i].addEventListener('click',() => {
        console.log(buttons[i].id);
        let result = rpsRound(buttons[i].id, getComputerChoice());
        roundResult.textContent = result;
        if(result[4] == 'W'){
            humanScore++;
            human.textContent = humanScore;
        }
        else if(result[4] == 'L'){
            computerScore++;
            com.textContent = computerScore;
        }

        if(humanScore == 5|| computerScore == 5){
            display.remove();
            const winner = document.createElement('div');
            winner.id = "winner";
            if(humanScore > computerScore){
                winner.textContent = "You Win!";
            }
            else{
                winner.textContent = "You Lose!";
            }
            body.appendChild(winner);
        }
    });
}
