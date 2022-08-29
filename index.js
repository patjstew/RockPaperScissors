

function getComputerChoice() {
    let a = "rock";
    let b = "paper";
    let c = "scissors";
    let numberChoice = Math.floor(Math.random()*(3-1+1)+1);;
    if (numberChoice === 1) {
        return a;
    } else if (numberChoice === 2) {
        return b;
    } else if (numberChoice === 3) {
        return c;
    }
}

getComputerChoice()


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "It's a tie!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose, paper beats rock."
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win, rock beats scissors."
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock."
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "It's a tie!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose. Scissors beat paper."
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors."
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win. Scissors beats paper."
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "It's a tie!"
    }
    console.log(playRound(playerSelection, computerSelection));
} 
const playerSelection = prompt("'Rock, Paper, Scissors?'").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

