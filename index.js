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

    case playerSelection.toLowerCase() !== "rock" &&
      playerSelection.toLowerCase() !== "paper" &&
      playerSelection.toLowerCase() !== "scissors":
      return "Player has made an invalid choice!";

    default:
      return "Computer Wins!";
  }
}

function game() {
  for (let index = 0; index < 5; index++) {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Enter rock, paper, or scissors");
    const gameWinner = playSingleRound(playerSelection, computerSelection);

    console.log(
      `Player selection: ${playerSelection}\nComputer selection: ${computerSelection}\n${gameWinner}`
    );
  }
}

game();
