window.onload = function() {	

	var startButton = document.querySelector('button');
	startButton.onclick = function() {
		start();
		console.log(start);
	};
}; 

var cards = ['A', 'A','B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'];
    console.log(cards);
    console.log (shuffle(cards));
​
function shuffle(o) {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
}
​
function start(){
    console.log('start button clicked!');
    shuffle(cards);
    addCardsToBoard(cards);
}
​
// <div data-value="A" class="small-div"></div>
​
function addCardsToBoard(cards) {
    console.log('adding cards to board');
    var board = document.getElementById('board');
    for (var i = 0; i < cards.length; i++) {
        var cardToAdd = document.createElement('div');  // <div> </div>
        cardToAdd.setAttribute( 'data-value', cards[i] ) // <div data-value="A"> </div>
        cardToAdd.setAttribute( 'class', 'small-div') // <div data-value="A" class="small-div"> </div>
​
        // but we could not query by id here
​
        board.appendChild(cardToAdd);
        // add the verb — add the behavior
        // the behavior is that when the div is clicked it should show the data-value as a thing the user can see
​
        // we could query by id
​
        cardToAdd.onclick = function(event) {
            // `this` is the thing (the element) that is clicked!!!!!! <div data-value="A" class="small-div"> </div>
            // this.innerHTML = this.dataset.value  // <div data-value="A" class="small-div"> A </div>
​
            // OR
​
            this.innerHTML = this.getAttribute('data-value')  // <div data-value="A" class="small-div"> A </div>
            this.setAttribute('class', 'clicked')
​
        }
    };
​
​
​
​
  function compareCards(element) {
      // find all the tiles with clicked, if there are not two cards then do nothing
      // getelemtsbyclass        'clicked', if (there are two things ) {
        // compare if those tiles have matching data-values
        // as a user when i click two cards and they dont match, i want the cards to return to being blank.
        // as a user when i click two cards that match, i want the matching cards to be removed from the screen.
​
    //  } else if {  if not
        // do nothing
    //}
​
​
  }
​
// compare the data-values of the two cards OR you could compare the innerHTML of the two cards
​
​
​
// HOW DO WE KEEP TRACK OF WHICH DIVS THE USER CLICKED???
​
// 1. (This is a dumb way) we could query for all of the divs in the board div and loops over them and if any of them have inner html
​
/*
var board = document.getElementById('board');
var tiles = board.children()
var clickedTiles = []
for (var i = 0; i < tiles.length; i++) {
   if (tiles[i].innerHTMl) {
    clickedTiles.push(tiles[i])
   }
}
 we could compare the two tiles in clickedTiles to see if they have the same dataValue
*/	
