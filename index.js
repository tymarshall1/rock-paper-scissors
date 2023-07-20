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

function createWinnerDiv(winner) {
  const bodyContents = document.querySelector("#bodyContainer");
  let bodyChild = bodyContents.lastElementChild;

  while (bodyChild) {
    bodyContents.removeChild(bodyChild);
    bodyChild = bodyContents.lastElementChild;
  }

  const winnerDiv = document.createElement("div");
  const winnerh1 = document.createElement("h1");
  const winnerbtn = document.createElement("button");
  const winnerh3 = document.createElement("h3");
  const winnerScoreh2 = document.createElement("h2");

  winnerDiv.setAttribute("class", "winner-div");
  winnerh1.textContent = winner;
  winnerh3.textContent = "Would you like to play again?";
  winnerbtn.textContent = "Play Again";

  winnerScoreh2.textContent = `Final Score - Player: ${playerScore} Computer: ${computerScore}`;

  winnerbtn.addEventListener("click", (e) => location.reload());

  winnerDiv.appendChild(winnerh1);
  winnerDiv.appendChild(winnerScoreh2);
  winnerDiv.appendChild(winnerh3);
  winnerDiv.appendChild(winnerbtn);

  bodyContents.appendChild(winnerDiv);
}

function handleWinner(playerSelection) {
  const computerSelection = getComputerChoice();
  const winner = playSingleRound(playerSelection, computerSelection);

  document.querySelector(
    "#playerLastRoll"
  ).textContent = `Last roll: ${playerSelection}`;

  document.querySelector(
    "#computerLastRoll"
  ).textContent = `Last roll: ${computerSelection}`;

  if (playerScore > 4) {
    createWinnerDiv(winner);
    return;
  } else if (computerScore > 4) {
    createWinnerDiv(winner);
    return;
  }
}

const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", (e) => handleWinner("Rock"));

const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", (e) => handleWinner("Paper"));

const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click", (e) => handleWinner("Scissors"));
