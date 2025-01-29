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

const CHOICES = {
	SCISSORS: 1,
	PAPER: 2,
	ROCK: 3
};

const ROUNDS = 5;

/* This will be the computer random generated choice */
function getComputerChoice() {
	return Math.floor(Math.random() * 3) + 1;
}

function getChoiceName(number) {
	switch(number) {
		case 1: return 'Scissor';
		case 2: return 'Paper';
		case 3: return 'Rock';
		default: return "Unknown"; // this returns when I click the img instead of the button.
	}
}

const scoreHuman = document.querySelector('.human-score > strong');
const scoreComputer = document.querySelector('.computer-score > strong');


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
		const noWon = document.createElement('p');
		noWon.textContent = `It's a tie for this round!`;
		results.appendChild(noWon);
		results.appendChild(br);
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
		scoreHuman.textContent = ` ${humanScore}`;
	} else {
		const computerWon = document.createElement('p');
		computerWon.textContent = `Computer won the round!`;
		results.appendChild(computerWon);
		results.appendChild(br);
		computerScore++;
		scoreComputer.textContent = ` ${computerScore}`;
	}

	getWinner(humanScore, computerScore);


}

const displayWinner = document.querySelector('.display-winner');
const winner = document.createElement('h4');

function getWinner(scoreOfPlayer, scoreOfComputer ) {
	if (scoreOfPlayer === 5) {
		winner.textContent = 'You Won the Game!';
		displayWinner.appendChild(winner);
	} 

	if (scoreOfComputer === 5) {
		winner.textContent = 'Computer Won the Game!';
		displayWinner.appendChild(winner);
	}
	return;
}

const buttons = document.querySelectorAll('button')
buttons.forEach(btn => {
	btn.addEventListener('click', (event) => {
		const playerSelection = Number(event.target.value);
		const computerSelection = getComputerChoice();
		playRound(playerSelection, computerSelection)
	});
});
