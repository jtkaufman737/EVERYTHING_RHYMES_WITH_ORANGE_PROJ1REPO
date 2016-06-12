window.onload = function() {    
    var startButton = document.querySelector('button');
    startButton.onclick = function() {
        start();
        console.log(start);
    };
}; 
​
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
function addCardsToBoard(cards) 
{
    console.log('adding cards to board');
    var board = document.getElementById('board');
    for (var i = 0; i < cards.length; i++) {
        var cardToAdd = document.createElement('div');  // <div> </div>
        cardToAdd.setAttribute( 'data-value', cards[i]); // <div data-value="A"> </div>
        cardToAdd.setAttribute( 'class', 'smaller'); // <div data-value="A" class="small-div"> </div
        board.appendChild(cardToAdd);
    cardToAdd.onclick = function () {
        this.innerHTML = this.getAttribute('data-value');  // <div data-value="A" class="small-div"> A </div>
        this.setAttribute('class', 'clicked');
        console.log('this')
        }
    };
}
​
  var checkYoSelf = function() {
      document.getElementsByClassName('clicked');
    if ((clicked[0].innerHTML===clicked[1].innerHTML) == true){
        console.log("Found a match!")
    }
    else if ((clicked[0].innerHTML!==clicked[1].innerHTML) !==true )/*say sorry, no match )*/
    { console.log ('testing')}
        else if (clicked[1].innerHTML='')  /*Do nothing, they go again*/
            { console.log('testing again')};
}