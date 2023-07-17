function getComputerChoice() {
  const playChoices = ["Rock", "Paper", "Scissors"];
  const roll = Math.floor(Math.random() * 3);
  return playChoices[roll];
}

function playSingleRound(playerSelection, computerSelection) {
  switch (true) {
    case playerSelection.toLowerCase() === "rock" &&
      computerSelection.toLowerCase() === "scissors":
      return "Player Wins!";

    case playerSelection.toLowerCase() === "paper" &&
      computerSelection.toLowerCase() === "rock":
      return "Player Wins!";

    case playerSelection.toLowerCase() === "scissors" &&
      computerSelection.toLowerCase() === "paper":
      return "Player Wins!";

    case playerSelection.toLowerCase() === computerSelection.toLowerCase():
      return "Its a draw!";

    default:
      return "Computer Wins!";
  }
}
