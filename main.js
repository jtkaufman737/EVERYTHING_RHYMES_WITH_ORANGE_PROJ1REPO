window.onload = function() {	

	var startButton = document.querySelector('button');
	startButton.onclick = function() {
		start();
		console.log(gameOn);
	}
} 

/*Remember for later: use combination of pop and push as possible way to shuffle the cards? Wouldn't be dry.