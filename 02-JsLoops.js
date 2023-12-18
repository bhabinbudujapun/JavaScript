// LOOPS
// FOR LOOP
const countries = ["Nepal", "India", "Indonesia", "United states"];
for (let i = 0; i < countries.length; i++) {
  //   console.log(contries[i]);
}

// WHILE LOOP
var i = 0;
while (i < countries.length) {
  //   console.log(contries[i]);
  i++;
}

// DO-WHILE LOOP
i = 0;
do {
  // console.log(contries[i]);
  i++;
} while (i < countries.length);

// FOR IN LOOP
for (const contry of countries) {
  // console.log(contry);
}

// FOR OF LOOP
for (const country in countries) {
  console.log(countries[country]);
}
