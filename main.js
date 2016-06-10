
window.onload = function() {	

	var startButton = document.querySelector('button');
	startButton.onclick = function() {
		start();
		
	};
}; 


// var number = function main() {
// 	getReadyToRumble();
// 	scoreCounter();

// 	function start() {
// 		var ask
// 		var name1
// 		var name2


var cards = ['A', 'A','B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'];
	console.log(cards);
	console.log (shuffle(cards));

function shuffle(o) { 
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
}

function start(){
	console.log('start button clicked!');
	shuffle(cards);
	addCardsToBoard(cards);
}

function addCardsToBoard(cards) {
	console.log('adding cards to board');
	var board = document.getElementById('board');
	for (var i = 0; i < cards.length; i++) {
		var cardToAdd = document.createElement('div');
		cardToAdd.innerHTML = cards[i];
		board.appendChild(cardToAdd);
	};
}

function toClickOrNotToClick(cards){
	cards.innerHTML = cards.dataset.value;
	cards.className += " clicked";

	var selected = document.getElementsByClassName('clicked');

	if (selected.length === 2) {
		checkForMatch();
}  


	
