
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

function addCardsToBoard(cards){
	console.log('adding cards to board');
	var board = document.getElementById('board');
	for (var i = 0; i < cards.length; i++) {
		var cardToAdd = document.createElement('div');
		cardToAdd.innerHTML = cards[i];
		board.appendChild(cardToAdd);
		// console.log($('div'))
		$('div').addClass('smaller')
		// /*getElementById.setAttribute('div',class?)
		// Need to combine getting the divs WITHIN the addCardsToBoard function and give them a separate class
		// so that I can resize their scale to fit inside my board...But I'm not sure how to combine getting the 
		// elements within scope and setting the attribute. (I know I know, google it, but whenever I try googling 
		// any combination of click events/set attributes or anything similar with innerHTML= (just examples)
		// it is incredibly unhelpful, probably because of how specific my question is)
	}
}
	
