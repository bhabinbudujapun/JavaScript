var counter = document.querySelector("#counter");
var followers = document.querySelector("#followers");
var count = 0;

setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerText = count;
  }
}, 0.1);

setTimeout(() => {
  followers.innerText = "Congratulations, 1K followers in Instagram";
}, 4500);
