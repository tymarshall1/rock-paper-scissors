let playerScore = 0;
let computerScore = 0;
const playerScoreNum = document.querySelector("#playerScore");
const computerScoreNum = document.querySelector("#computerScore");
const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", (e) => handleWinner("Rock"));

const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", (e) => handleWinner("Paper"));

const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click", (e) => handleWinner("Scissors"));

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

function outlineRolls(playerSelection, computerSelection) {
  computerRockBtn = document.querySelector("#computer-rock-button");
  computerPaperBtn = document.querySelector("#computer-paper-button");
  computerScissorsBtn = document.querySelector("#computer-scissors-button");

  if (playerSelection === "Rock") {
    rockBtn.classList.add("outline-roll");
    paperBtn.classList.remove("outline-roll");
    scissorsBtn.classList.remove("outline-roll");
  } else if (playerSelection === "Paper") {
    rockBtn.classList.remove("outline-roll");
    paperBtn.classList.add("outline-roll");
    scissorsBtn.classList.remove("outline-roll");
  } else {
    rockBtn.classList.remove("outline-roll");
    paperBtn.classList.remove("outline-roll");
    scissorsBtn.classList.add("outline-roll");
  }

  if (computerSelection === "Rock") {
    computerRockBtn.classList.add("outline-roll");
    computerPaperBtn.classList.remove("outline-roll");
    computerScissorsBtn.classList.remove("outline-roll");
  } else if (computerSelection === "Paper") {
    computerRockBtn.classList.remove("outline-roll");
    computerPaperBtn.classList.add("outline-roll");
    computerScissorsBtn.classList.remove("outline-roll");
  } else {
    computerRockBtn.classList.remove("outline-roll");
    computerPaperBtn.classList.remove("outline-roll");
    computerScissorsBtn.classList.add("outline-roll");
  }
}

function createWinnerDiv(winner) {
  const bodyContents = document.querySelector("#bodyContainer");
  let bodyChild = bodyContents.lastElementChild;

  while (bodyChild) {
    bodyContents.removeChild(bodyChild);
    bodyChild = bodyContents.lastElementChild;
  }

  document.querySelector("#rules").remove();

  const winnerDiv = document.createElement("div");
  const winnerh1 = document.createElement("h1");
  const winnerbtn = document.createElement("button");
  const winnerh3 = document.createElement("h3");
  const winnerScoreh2 = document.createElement("h2");
  const winnerImagesDiv = document.createElement("div");
  const winnerImage1 = document.createElement("img");
  const winnerImage2 = document.createElement("img");
  const winnerImage3 = document.createElement("img");

  winnerImage1.src = "./images/rock.png";
  winnerImage2.src = "./images/paper.png";
  winnerImage3.src = "./images/scissors.png";

  winnerDiv.setAttribute("class", "winner-div");
  winnerImagesDiv.setAttribute("class", "winner-images");
  winnerh1.textContent = winner;
  winnerh3.textContent = "Would you like to play again?";
  winnerbtn.textContent = "Play Again";
  winnerbtn.setAttribute("class", "winner-button");
  winnerImagesDiv.appendChild(winnerImage1);
  winnerImagesDiv.appendChild(winnerImage2);
  winnerImagesDiv.appendChild(winnerImage3);

  winnerScoreh2.textContent = `Final Score - Player: ${playerScore} Computer: ${computerScore}`;

  winnerbtn.addEventListener("click", (e) => location.reload());

  winnerDiv.appendChild(winnerh1);
  winnerDiv.appendChild(winnerScoreh2);
  winnerDiv.appendChild(winnerh3);
  winnerDiv.appendChild(winnerbtn);
  winnerDiv.appendChild(winnerImagesDiv);

  bodyContents.appendChild(winnerDiv);
}

function handleWinner(playerSelection) {
  const computerSelection = getComputerChoice();
  const winner = playSingleRound(playerSelection, computerSelection);

  outlineRolls(playerSelection, computerSelection);

  if (playerScore > 4) {
    createWinnerDiv(winner);
    return;
  } else if (computerScore > 4) {
    createWinnerDiv(winner);
    return;
  }
}
