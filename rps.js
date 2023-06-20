
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

function game(){
    let humanScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; ++i){
        let playerChoice = prompt("Enter Your Choice: ");
        let computerChoice = getComputerChoice();
        let result = rpsRound(playerChoice, computerChoice);
        result = result.slice(4);
        if(result[4] == 'W'){
            humanScore++;
        }
        else if(result[4] == 'L'){
            computerScore++;
        }
    }
}

function main(){
    console.log("yo");
}


main();