// function fetchData(callBack) {
//   setTimeout(() => {
//     const data = "some data";
//     callBack(data);
//   }, 2000);
// }

// function handleData(data) {
//   console.log(data);
// }

// fetchData(handleData);

// const fetchData = (callBack) => {
//   setTimeout(() => {
//     const data = "some data";
//     callBack(data);
//   }, 2000);
// };

// function handleData(data) {
//   console.log(data);
// }

// fetchData(handleData);

function sum() {
  console.log(arguments.length);
  console.log(arguments[0])
}

// console.log(sum(1, 2, 3));
sum(1, 2, 3);
