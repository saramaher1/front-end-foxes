const cards = document.querySelectorAll(".card");
let matchedPairs = 0;
let cardOne, cardTwo;
let disableDeck = false;

function shuffleCards() {
  matchedPairs = 0; // reset matchedPairs variable to 0
  disableDeck = false; // reset disableDeck boolean to false
  cardOne = cardTwo = ""; // reset cardOne and cardTwo variables to empty string
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]; // create an array of the image numbers, 1-8, twice
  arr.sort(() => (Math.random() > 0.5 ? 1 : -1)); // randomly sort the array

  cards.forEach((card, i) => {
    // loop over the set of cards. For each card...
    card.classList.remove("flip"); // remove the 'flip' class
    let imgTag = card.querySelector(".back-view img"); // find the back-view image tag by querying all the childNodes of the current card element for the '.back-view img' CSS selector
    imgTag.src = `images/img-${arr[i]}.png`; // set the value of the src attribute on the current imgTag to a numbered filename based on our randomized array
    card.addEventListener("click", flipCard); // add a click event listener to the current card to execute a function `flipCard` when clicked
  });
}
shuffleCards();
function flipCard(evt) {
  const clickedCard = evt.target;
  if (!cardOne) {
    // if there is not yet a value assigned to the cardOne variable...
    return (cardOne = clickedCard); // set the cardOne value as the clickedCard and end this function.
  }
  // everything below will execute if the condition above was not met (if cardOne already had a value when flipCard() was called)
  cardTwo = clickedCard; // set the cardTwo value as the clickedCard
  disableDeck = true; // set this to true for the next time this flipCard function is called, when the top level condition is evaluated
}
