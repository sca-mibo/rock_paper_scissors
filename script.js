//New-game button section
var newGameBtn = document.getElementById('js-newGameButton');
newGameBtn.addEventListener(click, newGame);

//Rock-paper-scissors button section
var pickRock = document.getElementById('js-playerPick_rock'),
	pickPaper = document.getElementById('js-playerPick_paper'),
	pickScissors = document.getElementById('js-playerPick_scissors');
pickRock.addEventListener(click, function() {
	playerPick('rock');
});
pickPaper.addEventListener(click, function() {
	playerPick('paper');
});
pickScissors.addEventListener(click, function () {
	playerPick('scissors');
});

//Game state and score
var gameState = 'notStarted',
	player = {
		name: '',
		score: 0
	},
	computer = {
		score: 0 
	};

//Variables showing game elements
var newGameElem = document.getElementById('js-newGameElement'),
	pickElem = document.getElementById('js-playerPickElement'),
	resultsElem = document.getElementById('js-resultsTableElement');

//Function steering visibility of game elements
function setGameElements() {
	switch(gameState) {
		case 'started':
			newGameElem.style.display = 'none';
			pickElem.style.display = 'block';
			resultsElem.style.display = 'block';
		  break;
		case 'ended':
			newGameBtn.innerText = 'Play again';
		case 'notStarted':
		default:
			newGameElem.style.display = 'block';
			pickElem.style.display = 'none';
			resultsElem.style.display = 'none';
	}
}

//Deploying setGameElements function
setGameElements();
