let humanScore = 0;
let computerScore = 0;

/**
 * return randomly Rock, Paper or scissors
 */
function getComputerChoice() {
    let randomNumber = Math.random() * 10;
    if(randomNumber >= 0 & randomNumber < 3){
        return "Rock";
    }
    if(randomNumber >= 3 & randomNumber < 6){
        return "Paper";
    }
    if(randomNumber >= 6 & randomNumber <= 10){
        return "Scissors";
    }
}

function getHumanChoice(){
 return prompt("Please write your choice form the list: 'Rock', 'Paper' or 'Scissors'");
}

function playRound(humanChoice, computerChoice) {
    let humanChoiceSimple = humanChoice.trim().toLowerCase();
    let computerChoiceSimple = computerChoice.trim().toLowerCase();

    if(humanChoiceSimple === computerChoiceSimple){
        console.log("No winers.")
        return;
    }
    if(humanChoiceSimple === "rock" && computerChoiceSimple === "scissors"){
        humanScore ++;
        console.log("Computer loses! Rock beats Scissors.");
        return;
    }
    if(humanChoiceSimple === "scissors" && computerChoiceSimple === "rock"){
        computerScore ++;
        console.log("Human loses! Rock beats Scissors.");
        return;
    }
    if(humanChoiceSimple === "rock" && computerChoiceSimple === "paper"){
        computerScore ++;
        console.log("Human loses! Paper beats Rock.");
        return;
    }
    if(humanChoiceSimple === "paper" && computerChoiceSimple === "rock"){
        humanScore ++;
         console.log("Computer loses! Paper beats Rock.");
        return;
    }
     if(humanChoiceSimple === "paper" && computerChoiceSimple === "scissors"){
        computerScore ++;
         console.log("Human loses! Scissors beats Paper.");
        return;
    }
    if(humanChoiceSimple === "scissors" && computerChoiceSimple === "paper"){
        humanScore ++;
         console.log("Computer loses! Scissors beats Paper.");
        return;
    }
    return;    
}

function playGame(rounds){
    for(let i =  1; i <= rounds; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log(`Human score: ${humanScore}, computer score: ${computerScore}.`);
    if(humanScore > computerScore){
         alert(`The winner is Human by score ${humanScore} against ${computerScore}.`);
    } else if(computerScore > humanScore){
           alert(`The winner is Computer by score ${computerScore} against ${humanScore}.`);

    }else {
           alert(`No winner.`);
    }
}

playGame(5);






