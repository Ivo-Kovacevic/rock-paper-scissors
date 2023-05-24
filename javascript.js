let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let roundWinner;
const buttons = document.querySelectorAll('button');
const playerScoreText = document.querySelector('.playerScore');
const computerScoreText = document.querySelector('.computerScore');
const playerIcon = document.querySelector('.playerIcon');
const computerIcon = document.querySelector('.computerIcon');
const message = document.querySelector('.message');

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
    if (playerSelection === computerSelection) {
        roundWinner = "tie";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
      ) {
        playerScore++;
        roundWinner = 'player';
    } else if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')
      ) {
        computerScore++;
        roundWinner = 'computer';
    }
}

// Update display info after each pick
function updateMessages() {
    if (roundWinner === 'player') {
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        message.textContent = `You won! ${playerSelection} beats ${computerSelection}`;
    } else if (roundWinner === 'computer') {
        computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
        message.textContent = `You lost. ${computerSelection} beats ${playerSelection}`;
    } else {
        message.textContent = `Tie`;
    }
    playerIcon.textContent = playerSelection.toUpperCase();
    computerIcon.textContent = computerSelection.toUpperCase();
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
}

// Button click event
function buttonClick() {
    computerSelection = getComputerChoice();
    playerSelection = this.classList[0];
    playRound(playerSelection, computerSelection);
    updateMessages();
}

buttons.forEach(button => button.addEventListener('click', buttonClick));