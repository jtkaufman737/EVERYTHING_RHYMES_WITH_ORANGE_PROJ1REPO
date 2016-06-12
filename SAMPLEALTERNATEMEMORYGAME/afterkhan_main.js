window.onload = function() {
	console.log('loaded');	
	var startButton = document.querySelector('button');
	startButton.onclick = function() {
		start();
	}
}

function shuffle(o) { 
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
}

function start(){
	console.log('start button clicked!');
	shuffle(tiles);
	console.log(tiles);
}

var tiles = ['A', 'A','B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'];

var setUpMyGame = function () {
	document.createElementById('board');
	document.createElementByClass('carDiv'[tiles]);
};