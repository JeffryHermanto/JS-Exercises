// 1. Create an object named `student` with the following properties:
//    - name: "Peter Parker"
//    - age: 18
//    - email: "peter@outlook.com"
//
// 2. Update the object properties:
//    - Change the `name` to "Spiderman" using bracket notation.
//    - Change the `age` to 19 using dot notation.
//
// 3. Add new properties to the object:
//    - hobby: "Chess"
//    - gender: "male"
//
// 4. Delete the following properties from the object:
//    - email
//    - age
//
// 5. Log the final `student` object to the console.

const student = {
  name: "Peter Parker",
  age: 18,
  email: "peter@outlook.com",
};

// Update properties
student["name"] = "Spiderman";
student.age = 19;

// Add properties
student.hobby = "Chess";
student["gender"] = "male";

// Delete properties
delete student.email;
delete student["age"];

console.log(student);
