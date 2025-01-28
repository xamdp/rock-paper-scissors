/* PSEUDOCODE */
/*
 * 1. Each round it will prompt the user for a choice
 * 2. The user will supply a choice.
 * 3. The computer will generate his own random choice.
 * 4. The result will be compared, either human or computer will win.
 * 5. There will be 5 rounds, per game.
 * */



/* I can assign 3 values 3 = Rock, 2 = Paper, and 1 = scissors */

let humanScore = 0;
let computerScore = 0;

const scoreHuman = document.querySelector('.human-score');
const scoreComputer = document.querySelector('.computer-score');

const CHOICES = {
	SCISSORS: 1,
	PAPER: 2,
	ROCK: 3
};

const ROUNDS = 5;



// const ROUNDS = 5;

/* This will be the computer random generated choice */
function getComputerChoice() {
	return Math.floor(Math.random() * 3) + 1;
}

/* the playerSelection is used instead, rather than using the old function which is getHumanChoice */

/* This will be the human choice */
// function getHumanChoice(choice) {
	// let choice = Number(window.prompt("1 -> Scissors,  2 -> Paper,  3 -> Rock, Choose a number: "));
	// if (choice < 1 || choice > 3 || isNaN(choice)) {
	// 	alert("Please enter a valid number between 1 and 3");
	// 	return getHumanChoice(); // ask again if less than 1, greater than 3 and if not a number.
	// } return choice;
// }

function getChoiceName(number) {
	switch(number) {
		case 1: return 'Scissor';
		case 2: return 'Paper';
		case 3: return 'Rock';
		default: return "Unknown";
	}
}

function playRound(humanChoice, computerChoice) {
	const results = document.querySelector('.results');
	const choiceHuman = document.createElement('p');
	const br = document.createElement('br');
	const choiceComputer = document.createElement('p');
	choiceHuman.textContent = `Human choice is ${getChoiceName(humanChoice)}`;
	choiceComputer.textContent = `Computer choice is ${getChoiceName(computerChoice)}`;

	results.appendChild(choiceHuman);
	results.appendChild(choiceComputer);
	results.appendChild(br);

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
		const humanWon = document.createElement('p');
		humanWon.textContent = `Human won the round!`;
		results.appendChild(humanWon);
		results.appendChild(br);
		humanScore++;
	} else {
		const computerWon = document.createElement('p');
		computerWon.textContent = `Computer won the round!`;
		results.appendChild(computerWon);
		results.appendChild(br);
		computerScore++;
	}
	// console.log(`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);
	scoreHuman.textContent = `You: ${humanScore}`;
	scoreComputer.textContent = `Computer: ${computerScore}`;
}



/* will need some refactoring */
function playGame() {
	let humanScore = 0;
	let computerScore = 0;

	for (let round = 1; round <= ROUNDS; round++) {
		// const humanChoice =  getHumanChoice();
		// const computerChoice =  getComputerChoice();
		// playRound(humanChoice, computerChoice);
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


const buttons = document.querySelectorAll('button')
buttons.forEach(btn => {
	btn.addEventListener('click', (event) => {
		const playerSelection = Number(event.target.value);
		const computerSelection = getComputerChoice();
		playRound(playerSelection, computerSelection);
	});
});

/* Start the game */
// playGame();





