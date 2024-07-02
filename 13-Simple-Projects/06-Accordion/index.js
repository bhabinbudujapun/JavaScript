document.addEventListener("DOMContentLoaded", () => {
  const accordion = document.querySelectorAll(".accordion-header");

  for (let index = 0; index < accordion.length; index++) {
    accordion[index].addEventListener("click", () => {
        accordion[index].nextElementSibling.classList.toggle("hidden");
    });
}
});
