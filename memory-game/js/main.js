


const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-diamonds.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
const cardsInPlay = [];
let userMatches = 0;


function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
			userMatches++;
			if (userMatches === 1) {
				document.getElementById('count').innerHTML = userMatches + " Total Match";
				console.log(userMatches);
			}

			else {
				document.getElementById('count').innerHTML = userMatches + " Total Matches";
			}
		}
		else {
			alert("Sorry, try again.")
		}
	}
}

function flipCard() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	if (cardsInPlay.length === 0) {
		var button = document.getElementsByTagName('button')[0];
		button.className = 'active';
	}
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();

}

function gameReset() {
	var cardEls = document.getElementsByTagName('img');
	for (let i = 0; i < cardEls.length; i++) {
		cardEls[i].setAttribute('src', 'images/back.png');
	}
	var button = document.getElementsByTagName('button')[0];
	button.classList.remove('active');

	cardsInPlay.length = 0;
}

function createBoard() {
	var cardsLength = cards.length;
	for (let i = 0; i < cardsLength; i++) {
		// loading the cards
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		var gameBoard = document.getElementById('game-board');
		gameBoard.appendChild(cardElement);
	}
	var button = document.getElementsByTagName('button')[0]
	button.addEventListener('click', gameReset);
}

createBoard();