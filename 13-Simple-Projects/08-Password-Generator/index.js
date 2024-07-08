document.addEventListener("DOMContentLoaded", () => {
  // DEFAULT VALUE OF TOTAL PASSWORD = 6
  const curPasswordRange = document.getElementById("curPasswordRange");
  curPasswordRange.textContent = 6;

  // Utility functions
  function randomCharacters(charSet) {
    return charSet[Math.floor(Math.random() * charSet.length)];
  }

  // Shuffle array (Fisher-Yates shuffle algorithm)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Generate password
  function generatePassword() {
    const passwordLength = parseInt(
      document.getElementById("passwordRange").value
    );
    const checkUpper = document.getElementById("checkUpper").checked;
    const checkLower = document.getElementById("checkLower").checked;
    const checkNumber = document.getElementById("checkNumber").checked;
    const checkSymbol = document.getElementById("checkSymbol").checked;

    const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerSet = "abcdefghijklmnopqrstuvwxyz";
    const numberSet = "0123456789";
    const symbolSet = "!@#$%^&*()_+}{?/>.<,'";

    let allChars = "";
    let guaranteedChars = [];

    if (checkUpper) {
      allChars += upperSet;
      guaranteedChars.push(randomCharacters(upperSet));
    }
    if (checkLower) {
      allChars += lowerSet;
      guaranteedChars.push(randomCharacters(lowerSet));
    }
    if (checkNumber) {
      allChars += numberSet;
      guaranteedChars.push(randomCharacters(numberSet));
    }
    if (checkSymbol) {
      allChars += symbolSet;
      guaranteedChars.push(randomCharacters(symbolSet));
    }

    let passwordResult = [...guaranteedChars];
    while (passwordResult.length < passwordLength) {
      passwordResult.push(randomCharacters(allChars));
    }

    shuffleArray(passwordResult);
    const password = passwordResult.join("");
    document.getElementById("inputField").value = password;
  }

  // Generate initial password on page load
  generatePassword();

  const passwordRange = document.getElementById("passwordRange");
  passwordRange.addEventListener("input", (event) => {
    curPasswordRange.textContent = event.target.value;
    generatePassword();
  });

  // Copy password to clipboard
  const copyPassword = document.getElementById("copyPassword");
  const inputField = document.getElementById("inputField");
  const copyMessage = document.getElementById("copyMessage");
  const errorMessage = document.getElementById("errorMessage");

  copyPassword.addEventListener("click", () => {
    const password = inputField.value;
    if (password) {
      navigator.clipboard
        .writeText(password)
        .then(() => {
          copyMessage.classList.remove("hidden");
          setTimeout(() => {
            copyMessage.classList.add("hidden");
          }, 2000);
        })
        .catch((err) => {
          console.error("Error copying text:", err);
        });
    } else {
      errorMessage.classList.remove("hidden");
      setTimeout(() => {
        errorMessage.classList.add("hidden");
      }, 2000);
    }
  });
});
