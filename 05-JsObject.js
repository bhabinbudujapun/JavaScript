var user = {
  firstName: "root",
  lastName: "bk",
  role: "admin",
  courseList: [],
  loginCount: 1,
  googleSignIn: true,
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled total ${this.courseList.length} course`;
  },
  getUserInfo: function () {
    console.log(
      `
User Details:
username: ${this.firstName} ${this.lastName}
role: ${this.role}
course-count: ${this.courseList.length}
`
    );
  },
};

// Accessing value
console.log(user["firstName"]);
console.log(user.role);

// Updating values
user.role = "user";
console.log(user.role);

user.buyCourse("Javascript");
console.log(user.getCourseCount());

user.getUserInfo();

// Functional Way to create Object OR Constructor Functions
var User = function (firstName, lastName, email, courseCount) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.courseCount = courseCount;

  this.getCourseCount = function () {
    console.log("Total number of courses: " + this.courseCount);
  };
};

User.prototype.getUserName = function () {
  console.log(`User name: ${this.firstName} ${this.lastName}`);
};

var user1 = new User("bhabin", "pun", "poon.bhabin6332@gmail.com", 1);

user1.getCourseCount();
user1.getUserName();