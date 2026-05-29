// 1. Create an array named `numbers` containing the values 1, 2, and 3.
//    Then, create a new array named `newNumbers` that copies all values
//    from `numbers` using the spread operator, and adds 4, 5, and 6 .
//    Log `newNumbers` to the console.
//
// 2. Create an object named `student` with the following properties:
//    - name: "Peter"
//    - age: 18
//
//    Then, create a new object named `updatedStudent` that copies all
//    properties from `student` and adds a new property:
//    - email: "peter@outlook.com"
//
//    Log `updatedStudent` to the console.

// 1
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];

console.log(newNumbers);

// 2
const student = {
  name: "Peter",
  age: 18,
};

const updatedStudent = {
  ...student,
  email: "peter@outlook.com",
};

console.log(updatedStudent);
