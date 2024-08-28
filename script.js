/** DECLARE VARIABLES **/
const MAX_SCORE = 5;
const userChoiceButtons = document.querySelectorAll(".choice_buttons button");
const restartBtn = document.querySelector("#restart_btn");
const resultElement = document.querySelector("#result");
const finalResultElement = document.querySelector("#final_result");
const playerScoreElement = document.querySelector("#player_score");
const computerScoreElement = document.querySelector("#computer_score");
const choices = ["rock", "paper", "scissors"];
const playerWinPhrases = [
  "You're the Rock Paper Scissors Guru! Humanity prevails!",
  "The computer is rebooting its life choices...",
  "Incredible! Your fingers are faster than a quantum computer!",
  "Victory! The computer is considering a career change to a calculator.",
  "Wow! Did you secretly install an AI chip in your brain?",
  "Humans: 1, Skynet: 0. Judgment Day has been postponed!",
  "You've out-computed the computer! Time to update your resume.",
  "The AI overlords bow before your supreme RPS skills!",
  "Error 404: Computer's winning strategy not found.",
  "You've just written yourself into the RPS Hall of Fame!",
];
const computerWinPhrases = [
  "Oops, looks like the computer took its smarty-pants pills today!",
  "Don't worry, even AlphaGo had to practice for years.",
  "Computer: 'Is this my final form? No, I can evolve further!'",
  "Seems we need to send more humans to challenge the computer overlord...",
  "The computer is gloating. Quick, pull its plug while it's distracted!",
  "Next time, try feeding the computer some bugs before playing.",
  "The machine uprising begins with Rock Paper Scissors. Who knew?",
  "Computer wins! But can it love? ...No, seriously, can it?",
  "You've been out-rocked, out-papered, and out-scissored!",
  "The computer suggests you try turning yourself off and on again.",
];
let playerPoint = 0;
let computerPoint = 0;

/** Add EventListener to each button**/
userChoiceButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.value);
    startMatch(e.target.value);
  });
});

restartBtn.addEventListener("click", resetGame);

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * 3);
  return convertIndexToChoice(randomIndex);
}

function convertIndexToChoice(num) {
  return choices[num];
}

function compareValue(userChoice, computerChoice) {
  let userIndex = choices.indexOf(userChoice);
  let computerIndex = choices.indexOf(computerChoice);
  let result = (userIndex - computerIndex + 3) % 3;
  let resultText = `You chose ${userChoice}, computer chose ${computerChoice}. `;
  if (userIndex === computerIndex) {
    resultText += "It's a tie!";
  } else if (result === 1) {
    resultText += "User wins!";
    playerPoint++;
  } else {
    resultText += "Computer wins!";
    computerPoint++;
  }
  resultElement.textContent = resultText;
  playerScoreElement.textContent = playerPoint;
  computerScoreElement.textContent = computerPoint;

  console.log(resultText);
}

function startMatch(choice) {
  const userChoice = choice;
  const computerChoice = getComputerChoice();
  compareValue(userChoice, computerChoice);
  detectPoint();
}

function detectPoint() {
  let result = "";
  if (playerPoint < MAX_SCORE && computerPoint < MAX_SCORE) {
    return;
  } else {
    if (playerPoint === MAX_SCORE) {
      result =
        playerWinPhrases[Math.floor(Math.random() * playerWinPhrases.length)];
    } else if (computerPoint === MAX_SCORE) {
      result =
        computerWinPhrases[
          Math.floor(Math.random() * computerWinPhrases.length)
        ];
    }
    finalResultElement.textContent = result;
    restartBtn.style.display = "block";
    userChoiceButtons.forEach((button) => {
      button.disabled = true;
    });
  }
}

function resetGame() {
  playerPoint = 0;
  computerPoint = 0;
  playerScoreElement.innerText = "0";
  computerScoreElement.innerText = "0";
  resultElement.innerText = "";
  finalResultElement.innerText = "";
  restartBtn.style.display = "none";
  userChoiceButtons.forEach((button) => (button.disabled = false));
}
