document.addEventListener("DOMContentLoaded", () => {
  const numberDec = document.getElementById("numberDec");
  const numberReset = document.getElementById("numberReset");
  const numberInc = document.getElementById("numberInc");
  const numberValueElement = document.getElementById("numberDisplay");
  let numberValue = parseInt(numberValueElement.innerText);

  function handleOperation(event) {
    const value = event.target.innerText;

    switch (value) {
      case "-":
        numberValue--;
        break;

      case "+":
        numberValue++;
        break;

      case "Reset":
        numberValue = 0;
        break;

      default:
        return;
    }

    numberValueElement.innerText = numberValue;
  }

  numberDec.addEventListener("click", handleOperation);
  numberReset.addEventListener("click", handleOperation);
  numberInc.addEventListener("click", handleOperation);
});
