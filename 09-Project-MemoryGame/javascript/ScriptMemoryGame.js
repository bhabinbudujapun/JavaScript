const cards = document.querySelectorAll(".card");

cards.forEach((card) => card.addEventListener("click", flip));

//Variables
var isflip = false;
var firstCard;
var secondCard;

function flip() {
  this.classList.add("flip");
  if (!isflip) {
    isflip = true;
    firstCard = this;
  } else {
    secondCard = this;
    checkIt();
  }
}

function checkIt() {
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
}

function success() {
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  resetValue();
}

function fail() {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetValue();
  }, 1000);
}

function resetValue() {
  isflip = false;
  firstCard = null;
  secondCard = null;
}

(function shuffle() {
  cards.forEach((card) => {
    let index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
})();
