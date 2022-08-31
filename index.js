const choice = ['rock', 'paper', 'scissors']


function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)]
}



function playRound(playerSelection, computerSelection) {
    console.log(playerSelection)
    console.log(computerSelection)
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose, paper beats rock."
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win, rock beats scissors."
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock."
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose. Scissors beat paper."
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors."
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win. Scissors beats paper."
    }
    console.log(playRound(playerSelection, computerSelection))
} 


function game() {
    for (i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("'Rock, Paper, Scissors?'").toLowerCase();
        console.log(playRound(playerSelection, computerSelection))
        
    }
    
}



