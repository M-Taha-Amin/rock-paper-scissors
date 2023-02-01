// Possible moves
const moves = ["rock", "paper", "scissors"];

// Added score count to keep track of wins
let playerScore = 0;
let computerScore = 0;

// Added a function for random computer choice
function getComputerChoice() {
  return moves[Math.floor(Math.random() * 3)];
}

// Added a function to let user play a round
function playRound(playerSelection, computerSelection) {
  // Prompt for user choice
  playerSelection = prompt("rock, paper or scissors?").toLowerCase();

  // A loop to check user choice validity
  while (!moves.includes(playerSelection)) {
    playerSelection = prompt(
      "Please choose a valid option: rock, paper or scissors?"
    ).toLowerCase();
  }

  // A variable to store computer choice
  computerSelection = getComputerChoice();

  // Conditionals to Check the winner
  if (playerSelection === computerSelection) {
    console.log(
      `Player: ${playerSelection}\nComputer: ${computerSelection}\nIt is a tie!\nPlayer Score| ${playerScore} : Computer Score| ${computerScore}`
    );
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(
      `Player: ${playerSelection}\nComputer: ${computerSelection}\nPlayer wins, ${playerSelection} beats ${computerSelection}!`
    );
    playerScore++;
    console.log(
      `Player Score = ${playerScore} | Computer Score = ${computerScore}`
    );
  } else {
    console.log(
      `Player: ${playerSelection}\nComputer: ${computerSelection}\nPlayer lost, ${computerSelection} beats ${playerSelection}!`
    );
    computerScore++;
    console.log(
      `Player Score = ${playerScore} | Computer Score = ${computerScore}`
    );
  }
}
