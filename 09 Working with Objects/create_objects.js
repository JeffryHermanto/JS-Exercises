// 1. Create an object named `student` with the following properties:
//    - name: "Peter Parker"
//    - age: 18
//    - email: "peter@outlook.com"
//
// 2. Access and log each property value using dot notation.
//
// 3. Access and log each property value again using bracket notation.

const student = {
  name: "Peter Parker",
  age: 18,
  email: "peter@outlook.com",
};

// Solution 1:
console.log(student.name);
console.log(student.age);
console.log(student.email);

// Solution 2:
console.log(student["name"]);
console.log(student["age"]);
console.log(student["email"]);
