// MAP
// It takes a callback function as an argument and returns a new array with the results of calling the function on every element of the original array.

//  The callback function can take up to three parameters: the current element, the index of the current element, and the original array.

//  The map method does not modify the original array, but creates a new one.

let arrOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrTwo = arrOne.map((element) => {
  return 2 * element;
});

arrTwo.forEach((element) => console.log(element));

// FILTER
// The filter() method in JavaScript allows you to create a new array by selecting elements that meet specific criteria from an existing array.

// The filter() method doesn’t modify the original array; it creates a new one with the filtered elements.

let arrNum = [15, 39, 20, 32, 30, 45, 22];
function divByFive(num) {
  return num % 3 == 0;
}
let arrNewNum = arrNum.filter(divByFive);
console.log(arrNewNum);

//REDUCE
// The reduce() method executes a provided function for each value in an array (from left to right) and accumulates the results into a single value. It’s like folding or reducing an array into a single output.

// You pass a callback function to reduce(). This function takes two parameters: An accumulator: This accumulates the results as the function iterates through the array. The current element of the array.

// The reduce() method doesn’t execute the function for empty array elements. It doesn’t modify the original array.

let arrValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const total = arrValue.reduce((accumulator, currentItem) => {
  return accumulator + currentItem;
});

console.log(total);
