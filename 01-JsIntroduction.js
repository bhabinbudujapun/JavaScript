// console.log("Hello world ! !");

//How to name variables
// fullName [Recommended, CamelCase]
// full-Name
// full_Name [Snakecase]
// FullName [Not Recommended]

//String
var courseName = "Javascript";
//Boolean
var isLoggedIn = false;
//Number
var loggedCount = 32;

// console.log(courseName);
// console.log(isLoggedIn);
// console.log(loggedCount);

const uid = 1208;
let fullName = "bhabin pun";
let email = "bhabinpun@dev.io";
let isLoggedInFromFacebook = false;
let isLoggedInFromGoogle = false;

// backtick
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


function getUserRole(name, role) {
    switch(role){
        case 'admin':
            console.log(`Hello, ${name} Welcome to admin dashboard`);
            break;
        case 'user':
            console.log(`Welcome to ${name}, landing page`);
            break;
        default:
            console.log(`Welcome, ${name}`);
            break;
    }

}

getUserRole('Bhabin');