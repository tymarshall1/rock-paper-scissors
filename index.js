let playerScore = 0;
let computerScore = 0;
const playerScoreNum = document.querySelector("#playerScore");
const computerScoreNum = document.querySelector("#computerScore");

function getComputerChoice() {
  const playChoices = ["Rock", "Paper", "Scissors"];
  const roll = Math.floor(Math.random() * playChoices.length);
  return playChoices[roll];
}

function playSingleRound(playerSelection, computerSelection) {
  switch (true) {
    case playerSelection.toLowerCase() === "rock" &&
      computerSelection.toLowerCase() === "scissors":
      playerScore++;
      playerScoreNum.textContent = `Player Score: ${playerScore}`;
      return "Player Wins!";

    case playerSelection.toLowerCase() === "paper" &&
      computerSelection.toLowerCase() === "rock":
      playerScore++;
      playerScoreNum.textContent = `Player Score: ${playerScore}`;
      return "Player Wins!";

    case playerSelection.toLowerCase() === "scissors" &&
      computerSelection.toLowerCase() === "paper":
      playerScore++;
      playerScoreNum.textContent = `Player Score: ${playerScore}`;
      return "Player Wins!";

    case playerSelection.toLowerCase() === computerSelection.toLowerCase():
      return "Its a draw!";

    case playerSelection.toLowerCase() !== "rock" &&
      playerSelection.toLowerCase() !== "paper" &&
      playerSelection.toLowerCase() !== "scissors":
      return "Player has made an invalid choice!";

    default:
      computerScore++;
      computerScoreNum.textContent = `Computer Score: ${computerScore}`;
      return "Computer Wins!";
  }
}

function handleWinner(playerSelection) {
  const computerSelection = getComputerChoice();
  const winner = playSingleRound(playerSelection, computerSelection);

  const bodyContents = document.querySelector("#bodyContainer");
  let bodyChild = bodyContents.lastElementChild;

  console.log(playerSelection, computerSelection);
  console.log(winner);

  if (playerScore > 4) {
    console.log("player wins game");
    while (bodyChild) {
      bodyContents.removeChild(bodyChild);
      bodyChild = bodyContents.lastElementChild;
    }
    return;
  } else if (computerScore > 4) {
    console.log("computer wins game");
    while (bodyChild) {
      bodyContents.removeChild(bodyChild);
      bodyChild = bodyContents.lastElementChild;
    }
    return;
  }
}

const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", (e) => handleWinner("rock"));

const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", (e) => handleWinner("paper"));

const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click", (e) => handleWinner("scissors"));
