


const cards = ['queen', 'queen', 'king', 'king'];
const cardsInPlay = [];
const cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log('User flipped '+cardsInPlay[0]);
const cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log('User flipped '+cardsInPlay[1]);
// console.log(cardsInPlay.length);
if (cardsInPlay.length === 2) {
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
}
else {
	alert("Sorry, try again.")

}
}