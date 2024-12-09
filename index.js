/* PSEUDOCODE */
/*
 * 1. Each round it will prompt the user for a choice
 * 2. The user will supply a choice.
 * 3. The computer will generate his own random choice.
 * 4. The result will be compared, either human or computer will win.
 * 5. There will be 5 rounds, per game.
 * */

console.log("Hello World");
/* I can assign 3 values 3 = Rock, 2 = Paper, and 1 = scissors */

let humanScore = 0;
let computerScore = 0;

const CHOICES = {
	SCISSORS: 1,
	PAPER: 2,
	ROCK: 3
};

const ROUNDS = 5;

/* This will be the computer random choice */
function getComputerChoice() {
	return Math.floor(Math.random() * 3) + 1;
}

/* This will be the human choice */
function getHumanChoice() {
	let choice = Number(window.prompt("1 -> Scissors,  2 -> Paper,  3 -> Rock, Choose a number: "));
	if (choice < 1 || choice > 3 || isNaN(choice)) {
		alert("Please enter a valid number between 1 and 3");
		return getHumanChoice(); // ask again if less than 1, greater than 3 and if not a number.
	}
	return choice;
}

function getChoiceName(number) {
	switch(number) {
		case 1: return "Scissors";
		case 2: return "Paper";
		case 3: return "Rock";
		default: return "Unknown";
	}
}

function playRound(humanChoice, computerChoice) {
	console.log("Human choice is " + humanChoice + " (" + getChoiceName(humanChoice) + ")");
	console.log("Computer choice is " + computerChoice + " (" + getChoiceName(computerChoice) + ")");

	// check for a tie
	if (humanChoice === computerChoice) {
		console.log("It's a tie for this round!")
		return;
	}

	if(
		(humanChoice == CHOICES.ROCK && computerChoice == CHOICES.SCISSORS) || 
			(humanChoice == CHOICES.SCISSORS && computerChoice == CHOICES.PAPER) || 
			(humanChoice == CHOICES.PAPER && computerChoice == CHOICES.ROCK)
	){
		console.log("Human won the round!");
		humanScore++;
	} else {
		console.log("Computer won the round!");
		computerScore++;
	}
	console.log(`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);
}

function playGame() {
	// let humanScore = 0;
	// let computerScore = 0;

	for (let round = 1; round <= ROUNDS; round++) {
		const humanChoice =  getHumanChoice();
		const computerChoice =  getComputerChoice();
		playRound(humanChoice, computerChoice);
	}

	console.log("\Game Over!");
	console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);

	if (humanScore > computerScore) {
		console.log("You Won the game!");
	} else if (computerScore > humanScore) {
		console.log("Computer Won the game!");
	} else {
		console.log("It's a tie!")
	}

}

/* Start the game */
playGame();



