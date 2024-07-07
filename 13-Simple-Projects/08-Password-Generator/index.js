document.addEventListener("DOMContentLoaded", () => {
  // GENERATE RANDOM SYMBOL/CHARACTER ACCORDING TO USER PROVIDED INFORMATION
  //   randomCharacters("abcdefghijklmnopqrstuvwxyz", 26, 1);
  //   randomCharacters("abcdefghijklmnopqrstuvwxyz".toUpperCase(), 26, 1);
  //   randomCharacters("0123456789", 10, 1);
  //   randomCharacters("!@#$%^&*()_+}{?/>.<,\\'", 21, 1);

  function randomCharacters(char, totalChar, length) {
    let result = [];
    for (let index = 0; index < length; index++) {
      result.push(char[Math.floor(Math.random() * totalChar)]);
    }
    console.log(result);
  }

  //SELECT DIFFERENT PASSWORD RANGE
  const passwordRange = document.getElementById("passwordRange");
  const curPasswordRange = document.getElementById("curPasswordRange");

  passwordRange.addEventListener("input", (event) => {
    curPasswordRange.textContent = event.target.value;
  });
});

// const textToCopy = "Hello, world!";
// navigator.clipboard
//   .writeText(textToCopy)
//   .then(() => console.log("Text copied successfully"))
//   .catch((err) => console.error("Error copying text:", err));
