let userPoint = 0;
let computerPoint = 0;
const choices = ["rock", "paper", "scissors"];

function getUserChoice() {
  let userChoice = prompt("Enter rock, paper, or scissors:");
  if (choices.indexOf(userChoice.toLowerCase()) === -1) {
    alert("Invalid input.");
    return getUserChoice();
  }
  return userChoice;
}

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
  if (userIndex === computerIndex) {
    console.log("It's a tie!");
  } else if (result === 1) {
    console.log("User wins!");
    userPoint++;
  } else {
    console.log("Computer wins!");
    computerPoint++;
  }
}

// ****   GAME LOGIC   ****
// if it's not game over then the game keeps going on
// ask user for the input
// generate random input for computer
// compare user input with computer input
// show the result

// ****    FLOW LOGIC    ****
// SET isGameOver TO FALSE
// SET userPoint TO 0
// SET computerPoint TO 0
// WHILE NOT isGameOver
//     SET userChoice TO PROMPT_USER("Enter rock, paper, or scissors:")
//     SET computerChoice TO CALL getComputerChoice()
//     CALL compareValue(userChoice, computerChoice)
//     IF userPoints EQUALS 5 OR computerPoints EQUALS 5 THEN SET isGameOver TO TRUE
//     END IF
// END WHILE

function startNewGame() {
  let isGameOver = false;
  userPoint = 0;
  computerPoint = 0;
  while (!isGameOver) {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    compareValue(userChoice, computerChoice);

    if (userPoint === 5 || computerPoint === 5) {
      isGameOver = true;
      alert("Game Over");
      alert(`Final Score - User : ${userPoint}, Computer : ${computerPoint}`);
    }
  }
}

startNewGame();
