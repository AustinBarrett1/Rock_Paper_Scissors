let playerChoice = 'null';
const cpuChoice = getComputerChoice();
console.log(game())

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if(choice === 0){
        return "PAPER";
    }else if (choice === 1) {
        return 'ROCK'
    }else if (choice === 2 || choice === 3){
        return 'SCISSORS'
    }
    else{
        return 'error';
    }
    
}

function round(playerChoice, cpuChoice){
let user = playerChoice.toUpperCase();
if (user == cpuChoice){
    return 2;
}
else if (user == 'ROCK'){
    if (cpuChoice == 'PAPER'){
        return 1;
    }
    else{
        return 0;
    }
}
else if (user == 'PAPER'){
    if (cpuChoice == 'SCISSORS'){
        return 1;
    }
    else{
        return 0;
    }
}
else if (user == 'SCISSORS'){
    if (cpuChoice == 'ROCK'){
        return 1;
    }
    else{
        return 0;
    }
}
else{
    return "error"
}

}

function game(){
    let yourScore = 0;
    let cpuScore = 0;
    
    while(yourScore != 3 || cpuScore != 3){
        getUserChoice();
        if(round(playerChoice, getComputerChoice()) === 0){
            yourScore++;
            console.log("You won this round!")
        }else if(round(playerChoice, getComputerChoice()) === 1){
            cpuScore++;
            console.log("you lost this round...")
        }else if(round(playerChoice, getComputerChoice()) === 2){
            console.log("This round was a tie!")
        }
        if (yourScore == 3 || cpuScore == 3){
            if (yourScore > cpuScore){
                console.log(yourScore);
                console.log(cpuScore);
                return "You Win the BO5!";
            }else if (yourScore < cpuScore){
                console.log(yourScore);
                console.log(cpuScore);
                return "You lose the BO5...";
            }
            else{
                console.log(yourScore);
                console.log(cpuScore);
            }
        }
    }
}

function getUserChoice(){
    playerChoice = prompt().toUpperCase();
}