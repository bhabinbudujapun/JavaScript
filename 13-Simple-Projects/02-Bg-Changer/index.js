document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("#selectedColor");
  buttons.forEach((element) =>
    element.addEventListener("click", handleOperation)
  );

  function handleOperation(event) {
    const tvScreen = document.getElementById("tvScreen");
    let tvScreenClass = Array.from(tvScreen.classList);
    tvScreenClass = tvScreenClass.filter(
      (element) => !element.startsWith("bg")
    );

    const selectedClass = Array.from(event.target.classList);
    const styleName = selectedClass.find((element) => element.startsWith("bg"));
    tvScreenClass.push(styleName);
    tvScreen.className = tvScreenClass.join(" ");
  }

  const textElement = document.getElementById("textInput");
  textElement.addEventListener("input", (event) => {
    let displayParagraph = document.getElementById("displayParagraph");
    // displayParagraph.style.fontWeight = "bold";
    displayParagraph.textContent = event.target.value;
  });
});
