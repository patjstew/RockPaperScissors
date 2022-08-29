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