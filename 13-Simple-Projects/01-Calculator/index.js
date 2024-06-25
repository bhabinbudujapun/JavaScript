document.addEventListener("DOMContentLoaded", () => {
  function handleOperation(event) {
    event.preventDefault();
    const firstNumber = parseFloat(
      document.getElementById("firstNumber").value
    );
    const secondNumber = parseFloat(
      document.getElementById("secondNumber").value
    );

    let result;

    switch (event.target.id) {
      case "add":
        result = firstNumber + secondNumber;
        break;
      case "sub":
        result = firstNumber - secondNumber;
        break;
      case "mul":
        result = firstNumber * secondNumber;
        break;
      case "div":
        result = (firstNumber / secondNumber).toFixed(4);
        break;
      default:
        result = "Invalid Operation";
    }

    document.getElementById("result").placeholder = result;
  }

  document.getElementById("add").addEventListener("click", handleOperation);
  document.getElementById("sub").addEventListener("click", handleOperation);
  document.getElementById("mul").addEventListener("click", handleOperation);
  document.getElementById("div").addEventListener("click", handleOperation);
});
