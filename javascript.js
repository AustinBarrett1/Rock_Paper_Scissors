const playerChoice = 'rock';
const cpuChoice = getComputerChoice();
console.log(theGame(playerChoice, cpuChoice));

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

function theGame(playerChoice, cpuChoice){
let user = playerChoice.toUpperCase();
if (user == cpuChoice){
    return "Its a tie! both players chose " + cpuChoice + "!";
}
else if (user == 'ROCK'){
    if (cpuChoice == 'PAPER'){
        return "The computer wins with " + cpuChoice + ".";
    }
    else{
        return "You win! Cpu chose " + cpuChoice + ".";
    }
}
else if (user == 'PAPER'){
    if (cpuChoice == 'SCISSORS'){
        return "The computer wins with " + cpuChoice + ".";
    }
    else{
        return "You win! Cpu chose " + cpuChoice + ".";
    }
}
else if (user == 'SCISSORS'){
    if (cpuChoice == 'ROCK'){
        return "The computer wins with " + cpuChoice + ".";
    }
    else{
        return "You win! Cpu chose " + cpuChoice + ".";
    }
}
else{
    return "error has occured"
}

}