//New-game button section
var newGameBtn = document.getElementById('js-newGameButton');
newGameBtn.addEventListener('click', newGame);

//Rock-paper-scissors button section
var pickRock = document.getElementById('js-playerPick_rock'),
	pickPaper = document.getElementById('js-playerPick_paper'),
	pickScissors = document.getElementById('js-playerPick_scissors');
pickRock.addEventListener('click', function() {
	playerPick('rock');
});
pickPaper.addEventListener('click', function() {
	playerPick('paper');
});
pickScissors.addEventListener('click', function () {
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

//Variables showing game result and player names
var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

//Function deployed after clicking on New Game button
function newGame() {
  player.name = prompt('Please enter your name', 'player name');
  if (player.name) {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();

    playerNameElem.innerHTML = player.name;
    setGamePoints();
    }	
}

//Function holding player's and computer's pick
function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
    setGamePoints();
    setGameWinner();
}

//Function setting game points
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
	}

//Function setting a random computer's pick
function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

//Defining variables for storing player and computer selections as well as results
var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

//Function checking who is the winner and setting the winner's score
function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; // draw
        playerResultElem.innerHTML = "Draw!";
        computerResultElem.innerHTML = "Draw!";
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {

        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Won!";
        computerResultElem.innerHTML = "Lost!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Won!";
        playerResultElem.innerHTML = "Lost!";
        computer.score++;
    }
  
}

//Function informing about the winner when one of the player scores 10 points
function setGameWinner() {
	if (computer.score == 10) {
		alert('Computer is the winner by' + ' ' + computer.score + 'to' + player.score);
		gameState = 'ended';
    	setGameElements();
    	}
    else if
    	(player.score == 10) {
    	alert(player.name + ' ' + 'is the winner by' + ' ' + player.score + 'to' + computer.score);
		gameState = 'ended';
    	setGameElements();
    	}

}