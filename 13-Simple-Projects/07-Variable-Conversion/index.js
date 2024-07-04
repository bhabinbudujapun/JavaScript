document.addEventListener("DOMContentLoaded", () => {
  const inputValue = document.getElementById("inputField");
  const button = document.getElementById("button");

  button.addEventListener("click", (event) => {
    event.preventDefault();

    if (inputValue.value.trim() === "") {
      alert("Could you please provide variable name");
    } else {
      const camelCase = document.getElementById("camelCase");
      const pascalCase = document.getElementById("pascalCase");
      const snakeCase = document.getElementById("snakeCase");
      const sSnakeCase = document.getElementById("sSnakeCase");
      const kebalCase = document.getElementById("kebalCase");
      const sKebabCase = document.getElementById("sKebabCase");

      let case01 = "";
      let case02 = "";
      let case03 = "";
      let case04 = "";
      let case05 = "";
      let case06 = "";

      //Variable Name Provided by USER
      const variableValues = inputValue.value;

      // firstLetterCap function has been called which return array of string and looping each element
      for (
        let index = 0;
        index < firstLetterCap(variableValues).length;
        index++
      ) {
        const element = firstLetterCap(variableValues)[index];
        if (index === 0) {
          case01 += lowerCase(element);
          case02 += element;
          case03 += lowerCase(element);
          case04 += upperCase(element);
          case05 += lowerCase(element);
          case06 += upperCase(element);
        } else {
          case01 += element;
          case02 += element;
          case03 += "_" + lowerCase(element);
          case04 += "_" + upperCase(element);
          case05 += "-" + lowerCase(element);
          case06 += "-" + upperCase(element);
        }
      }

      //Placing output according to variable name
      camelCase.innerText = case01;
      pascalCase.innerText = case02;
      snakeCase.innerText = case03;
      sSnakeCase.innerText = case04;
      kebalCase.innerText = case05;
      sKebabCase.innerText = case06;
    }

    // convert into lower-case
    function lowerCase(word) {
      return word.toLowerCase();
    }

    //convert into UPPER-CASE
    function upperCase(word) {
      return word.toUpperCase();
    }

    // return array of String(each word first letter 'CAPITAL')
    function firstLetterCap(word) {
      let finalString = "";

      let tempString = word.trim().split(" ");
      let tempValues = tempString.filter((word) => word !== "");

      tempValues.forEach((element) => {
        let firstWords =
          element.charAt(0).toUpperCase() + element.substring(1).toLowerCase(0);
        finalString += firstWords + " ";
      });
      return finalString.trim().split(" ");
    }
  });
});
