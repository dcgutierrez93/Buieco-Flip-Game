// Cards in array
let card = document.getElementsByClassName("card");
let cards = [...card];

// loop to add event listeners to each card
for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", displayCard);
}

var displayCard = function () {
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toglle("disabled");
}
// deck of all cards in game
const deck = document.getElementById("card-deck");

// Var for matchedCards
let matchedCards = document.getElementsByClassName("match");

// array for opened cards
var openedCards = [];

// Function Shuffle Deck - on load and restart
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
