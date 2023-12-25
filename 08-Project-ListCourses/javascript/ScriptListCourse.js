var courses = [
  {
    name: "HTML",
    price: "3.99",
  },
  {
    name: "CSS",
    price: "5.99",
  },
  {
    name: "Js",
    price: "7.99",
  },
  {
    name: "React",
    price: "9.99",
  },
  {
    name: "Angular",
    price: "9.99",
  },
  {
    name: "Django",
    price: "6.99",
  },
];

function generateCourseList() {
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "";
  courses.forEach((course) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const i = document.createElement("i");
    i.classList.add("fa-solid", "fa-hand-point-right");

    const name = document.createTextNode(" " + course.name);

    const span = document.createElement("span");
    span.classList.add("float-end");
    const price = document.createTextNode("$ " + course.price);
    span.appendChild(price);

    li.appendChild(i);
    li.appendChild(name);
    li.appendChild(span);

    ul.appendChild(li);
  });
}

// generateCourseList();
window.addEventListener("load", generateCourseList);

const button = document.querySelector(".btn-sort");
button.addEventListener("click", () => {
  courses.sort((a, b) => a.price - b.price);
  generateCourseList();
});

const dbutton = document.querySelector(".btn-dsort");
dbutton.addEventListener("click", () => {
  courses = courses
    .map((course) => ({ ...course, price: parseFloat(course.price) }))
    .reverse();
  generateCourseList();
});
