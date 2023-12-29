const cards = document.querySelectorAll(".card");
console.log(cards);

cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  this.classList.add("flip");
}

(function shuffle() {
  cards.forEach((card) => {
    let index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
})();
