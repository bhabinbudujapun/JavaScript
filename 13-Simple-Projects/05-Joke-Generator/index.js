document.addEventListener("DOMContentLoaded", () => {
  const generateJoke = document.getElementById("generateJoke");

  async function handleOperation() {
    try {
      generateJoke.innerText = "Fetching Joke ...";
      const URL = "https://official-joke-api.appspot.com/random_joke";
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error("Network Response Was Not OK");
      }

      const jokeData = await response.json();
      //   console.log("Joke setup:", jokeData.setup);
      //   console.log("Joke punchline:", jokeData.punchline);

      const paragraphJoke = document.getElementById("paragraphJoke");
      generateJoke.innerText = "Get Another Joke";
      paragraphJoke.innerHTML = `<span> ${jokeData.setup} <br> ${jokeData.punchline}</span>`;
    } catch (error) {
      console.error("Something Went Wrong:", error);
    }
  }

  generateJoke.addEventListener("click", handleOperation);
});
