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

// Added a function to let user win the game if they win 5 rounds
function game() {
  for (let round = 1; round <= Infinity; round++) {
    if (playerScore === 5) {
      console.log("Congratulations! You won the game :)");
      break;
    } else if (computerScore === 5) {
      console.log("Computer won, You lost the game :(");
      break;
    } else {
      console.log(`ROUND: ${round}`);
      playRound();
    }
  }

  // A conditional to let user play as many times as they want!
  if (confirm("Do you want to play again?")) {
    playerScore = 0;
    computerScore = 0;
    game();
  } else {
    console.log("Thanks for playing!");
  }
}

// A variable to ask user if they want to play
let wantToPlay = confirm(
  "Would you like to play a game of Rock, Paper, Scissors?"
);

// Conditionals based on user input
if (wantToPlay) {
  game();
} else {
  alert("Ok, maybe next time!");
}
