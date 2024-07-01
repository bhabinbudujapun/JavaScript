// It takes a callback function as an argument and returns a new array with the results of calling the function on every element of the original array.

//  The callback function can take up to three parameters: the current element, the index of the current element, and the original array.

//  The map method does not modify the original array, but creates a new one.

let arrOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrTwo = arrOne.map((element) => {
  return 2 * element;
});

arrTwo.forEach((element) => console.log(element));
