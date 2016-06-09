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
function makePlay(tile){
	function showLetter () {
	getElementById(.tiles)

	//*something to display inner html
    tileDiv.onclick('attribute','clicked')
    
	
	console.log(tile);
	var function = twoClicked () {
		for var twoClicked (i<3; i++) //starts a counter
			//*how do I reference the number of elements with an attribute
			//*to tell if the attribute "clicked" exists twice?
	}

function checkForMatch() {

	// write all your code for this function inside setTimeout below:

	setTimeout function() //*This syntax looks weird--did I somehow accientally do that?
		//* trying to get the data value out of 2 clicked elements. For 
		//* while they are equal, else if not...
		while {
			getElementByID('clicked');
			(clicked(data-value) == clicked(data-value)) == true;
			clicked.setAttribute('class', 'found');
			remove.attribute('class','clicked')
		}
		else if {
			getElementByID('clicked');
			(clicked(data-value) !== clicked(data-value)) == true;
			remove.attribute('class', 'clicked');
			clicked.innerHTML=('')
			//* Note to self need to look up syntax on line 81
			//*Trying to say in this section if the data values are 
			//*Same add a class of matched, but I'm not sure if I should
			//* leave the set class on line 82 to set it to nothing, or 
			//* just have a unspecified else so it won't do anything if
			//*there is no match
		}
		
	}, 1500);
}

function checkForWin() {
  	getElementById('tiles')
  	for //* tiles class =found === true, tiles class === "won" {
  	
  	}
  	else {

  	}