let humanScore = 0;
let computerScore = 0;
let maxScore = 2;

let rockButton = document.querySelector("#rockId");
let paperButton = document.querySelector("#paperId");
let scissorsButton = document.querySelector("#scissorsId");

let resultDiv =  document.querySelector("#resultId");

rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));


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


function reportResultsInUi(text){
    resultDiv.innerText = `Results: ${text}`;
}

function disableButtons(){
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    rockButton.classList.remove("button");
rockButton.classList.add("disabledButton");
paperButton.classList.add("disabledButton");
scissorsButton.classList.add("disabledButton");

}

function playRound(humanChoice, computerChoice) {
    if(humanScore >= maxScore || computerScore >= maxScore){
        disableButtons();
        let msg = humanScore > computerScore ? `The winner is Human by score ${humanScore} vs ${computerScore}.`
                                             : (humanScore == computerScore ? "No winners"
                                                 : `The winner is Computer by score ${computerScore} vs ${humanScore}.`); 
        reportResultsInUi(msg);
        return;
    }
    let humanChoiceSimple = humanChoice.trim().toLowerCase();
    let computerChoiceSimple = computerChoice.trim().toLowerCase();

    if(humanChoiceSimple === computerChoiceSimple){
       reportResultsInUi("No winers.")
        return;
    }
    if(humanChoiceSimple === "rock" && computerChoiceSimple === "scissors"){
        humanScore ++;
        reportResultsInUi("Computer loses! Rock beats Scissors.");
        return;
    }
    if(humanChoiceSimple === "scissors" && computerChoiceSimple === "rock"){
        computerScore ++;
        reportResultsInUi("Human loses! Rock beats Scissors.");
        return;
    }
    if(humanChoiceSimple === "rock" && computerChoiceSimple === "paper"){
        computerScore ++;
        reportResultsInUi("Human loses! Paper beats Rock.");
        return;
    }
    if(humanChoiceSimple === "paper" && computerChoiceSimple === "rock"){
        humanScore ++;
         reportResultsInUi("Computer loses! Paper beats Rock.");
        return;
    }
     if(humanChoiceSimple === "paper" && computerChoiceSimple === "scissors"){
        computerScore ++;
        reportResultsInUi("Human loses! Scissors beats Paper.");
        return;
    }
    if(humanChoiceSimple === "scissors" && computerChoiceSimple === "paper"){
        humanScore ++;
         reportResultsInUi("Computer loses! Scissors beats Paper.");
        return;
    }
    return;    
}

/*
function getHumanChoice(){
 return prompt("Please write your choice form the list: 'Rock', 'Paper' or 'Scissors'");
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
*/
//playGame(5);






