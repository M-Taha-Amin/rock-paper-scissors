// Possible moves
const moves = ["rock", "paper", "scissors"];

// Added score count to keep track of wins
let playerScore = 0;
let computerScore = 0;

// Added a function for random computer choice
function getComputerChoice() {
  return moves[Math.floor(Math.random() * 3)];
}
