// console.log("Hello world ! !");

//How to name variables
// fullName [Recommended, CamelCase]
// full-Name
// full_Name [Snakecase]
// FullName [Not Recommended]

//STRING
var courseName = "Javascript";
//BOOLEAN
var isLoggedIn = false;
//NUMBER
var loggedCount = 32;

// console.log(courseName);
// console.log(isLoggedIn);
// console.log(loggedCount);

const uid = 1208;
let fullName = "bhabin pun";
let email = "bhabinpun@dev.io";
let isLoggedInFromFacebook = false;
let isLoggedInFromGoogle = false;

// BACKTICK
console.log(`
With the uid: ${uid}
Email: ${email}
Enrolled Course: ${courseName}
From the facebook: ${isLoggedInFromFacebook}
`);

let sellingPrice = 199;
let listingPrice = 799;

let discountPrice = ((listingPrice - sellingPrice) / listingPrice) * 100;

// Math.round function use to round the number
let displayDiscountPrice = Math.round(discountPrice);

console.log("Discount Percentage: " + displayDiscountPrice + "%");

// typeof function used to print the which type of value
console.log("Type of value: " + typeof displayDiscountPrice);

// SWITCH CASE
function getUserRole(name, role) {
  switch (role) {
    case "admin":
      console.log(`Hello, ${name} Welcome to admin dashboard`);
      break;
    case "user":
      console.log(`Welcome to ${name}, landing page`);
      break;
    default:
      console.log(`Welcome, ${name}`);
      break;
  }
}

getUserRole("Bhabin", "admin");

// TERNARY OPERATOR
let authenticated = true;

// if (authenticated) {
//   console.log("Show signout button");
// } else {
//   console.log("Show signin button");
// }

authenticated
  ? console.log("Show signout button")
  : console.log("Show signin button");

// COMPARISION OPERATOR equality(==) and strict equality(===)
//equality(==): check operands/data value only, like:
if (1 == "1") {
  console.log("True for equality operator");
}

//strict equality(===) operator: check operands/data value and type also: like
if (1 == "1") {
  console.log("False for strick equality operator");
}
