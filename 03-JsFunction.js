// NOTE:
// 1. Function declarations are scanned and made available
// 2. Variable declarations are scanned and made undefined

// SIMPLE FUNCTION
function sayHello(name) {
  return `Hello, ${name}`;
}

var greeting = sayHello("Ramesh");
// console.log(greeting);
// console.log(sayHello("prabin"));

// ARROW FUNCTION
// Example: Greater number
const bigNumber = (a, b) => {
  if (a > b) return `${a} is greater than ${b}`;
  else return `${b} is greater than ${a}`;
};
// console.log(bigNumber(100, 22));

// Example: odd or even number
const isEven = (number) => {
  return number % 2 === 0;
};
// if (isEven(3)) console.log("Even number");
// else console.log("Odd number");

// CODE HOISTING
// console.log("Even number: ", isEven(10));
function isOdd(number) {
  return number % 2 === 0;
}

// SCOPE CHAIN
var userName = "bhabin";

const loginUserName = () => {
  var userName = "root";
  console.log(`Logined user: ${userName}`);
  function loginUser() {
    var userName = "admin";
    console.log(`Logined user: ${userName}`);
  }
  //   loginUser();
};

// loginUserName();

var isEvenfun = (number) => {
  console.log(number);
  return number % 2 === 0;
};

const numList = [2, 4, 6];

console.log(numList.every(isEvenfun));

