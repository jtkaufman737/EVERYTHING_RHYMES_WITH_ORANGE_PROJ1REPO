window.onload = function() {	

	var startButton = document.querySelector('button');
	startButton.onclick = function() {
		start();
		console.log(start);
	};
}; 

var cards = ['A', 'A','B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'];
	console.log(cards);

function shuffle(o) { 
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
}

function start(){
	console.log('start button clicked!');
	shuffle(cards);
	console.log(cards);
	setUpCards();
	console.log(setUpCards);
}

function setUpCards() {
	console.log('make'); 

for (var index=0; index<cards.length; index++) {
		var cards = document.createElement('carDiv');
		cards.setAttribute('class','column');
		cards.setAttribute('data-value',cards[index]);
		cards.onclick = function() {
			makePlay(this);
			};
		}
	}