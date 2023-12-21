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
  return number % 2 === 0;
};

const numList = [2, 4, 6];
// console.log(numList.every(isEvenfun));

// Self-Executing Anonymous Function OR,
// Immediate Invoked Function

(function () {
  console.log("IIFE Function - Immediate Invoked Function");
})();

// Passing arguments
(function () {
  console.log(arguments[0]);
})("IIFE Function with arguments");

// Or,
(function (arg) {
  console.log(arg);
})("IIFE Function with arguments");

// Arrow functions
let arrowFunction = () => {
  console.log("Arrow functions");
};

arrowFunction();

// Another example of arrow function
let sumValue = (a, b) => a + b;

console.log("Sum: " + sumValue(1, 2));

// In JavaScript, a closure is a feature that allows inner functions to access the outer scope of a function.
function outerFunction() {
  let outerVariable = "I am outside!";

  function innerFunction() { 
    console.log(outerVariable);
  }
  return innerFunction;
}

let innerFunc = outerFunction();
innerFunc();

