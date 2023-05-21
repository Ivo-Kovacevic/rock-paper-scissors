let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

// Generating output for computer
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        computerChoice = "rock";
    } else if (computerChoice == 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

// Compare player and computer choices and determine winner
function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection == computerSelection) {
        result = "Tie";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        result = "You lost! Paper beats rock.";
        computerScore++;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        result = "You won! Rock beats scissors.";
        playerScore++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        result = "You won! Paper beats rock.";
        playerScore++;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        result = "You lost! Scissors beat paper.";
        computerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        result = "You won! Scissors beat paper.";
        playerScore++;
    } else {
        result = "You lost! Rock beats scissors.";
        computerScore++;
    }
    return result;
}

// Start game until someone wins 5 rounds
function game() {
    while (playerScore < 5 && computerScore < 5) {
        playerSelection = prompt("Pick rock, paper or scissors.").toLowerCase();
        while(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
            playerSelection = prompt("Invalid input! Pick rock, paper or scissors!").toLowerCase();
        }
        computerSelection = getComputerChoice();
        console.log(`\nYou picked ${playerSelection}, and computer picked ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
        console.log(`You ${playerScore} - ${computerScore} Computer\n`);
    }
}

game();