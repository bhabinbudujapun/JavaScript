// ARRAY
var countries = ["Nepal", "India", "China", "Bangladesh"];

// Accessing array using for loop
/*for (let index = 0; index < countries.length; index++) {
  const country = countries[index];
  console.log(country);
}
*/
countries.push("Bhutan");

// Accessing array using forEach method
let sn = 1;
countries.forEach((country) => {
  console.log(`Sn. ${sn} ${country}`);
  sn++;
});

// Print length of countries or array
console.log(countries.length);

// Print index number of array, Its also case-sensitive
console.log(countries.indexOf("China"));
