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
};

// Accessing value
console.log(user["firstName"]);
console.log(user.role);

// Updating values
user.role = "user";
console.log(user.role);

user.buyCourse("Javascript");
console.log(user.getCourseCount());
