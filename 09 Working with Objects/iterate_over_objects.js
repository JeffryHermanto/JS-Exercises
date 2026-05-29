// 1. Create an object named `student` with the following properties:
//    - name: "Peter Parker"
//    - age: 18
//    - email: "peter@outlook.com"
//
// 2. Use a `for...in` loop to iterate through the object.
//    Log each key and its corresponding value.
//
// 3. Use `Object.keys()` to get an array of the object keys
//    and store it in a variable named `studentKeys`.
//
// 4. Use `Object.values()` to get an array of the object values
//    and store it in a variable named `studentValues`.
//
// 5. Use `Object.entries()` to get an array of key-value pairs.
//    Loop through the entries using `forEach()` and log each entry.

const student = {
  name: "Peter Parker",
  age: 18,
  email: "peter@outlook.com",
};

// 1
for (const key in student) {
  console.log(key);
  console.log(student[key]);
}

// 2
const studentKeys = Object.keys(student);
console.log(studentKeys);

// 3
const studentValues = Object.values(student);
console.log(studentValues);

// 4
Object.entries(student).forEach((entry) => {
  console.log(entry);
});
