// In javascript, function are call as first-class-function
// which means function are treated as variable where function
// are pass as argument as well as receive or assign on variable

/*
function sayHello() {
  return "Hello";
}

function messageHello(callback, name) {
  return callback() + " " + name;
}

console.log(messageHello(sayHello, "Root"));
*/

// get and set
class Person {
  constructor(firstName, lastName, email) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.email = email);
  }

  set fullName(name) {
    const fullName = name.split(" ");
    this.firstName = fullName[0];
    this.lastName = fullName[1];
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  //method to get full name without using 'get'
  //   fullName() {
  //     return `${this.firstName} ${this.lastName}`;
  //   }
}

const Root = new Person("Root", "Pun", "root@gmail.com");
console.log(Root.fullName);
Root.fullName = "bhabin pun";
console.log(Root.fullName);
