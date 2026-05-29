// 1. Create an object named `person` with the following properties:
//    - firstName: "Shohei"
//    - lastName: "Ohtani"
//    - sayHello: a method that logs "Hello, my name is Shohei" using `this.firstName`
//
// 2. Call the `sayHello()` method to display the greeting in the console.

const person = {
  firstName: "Shohei",
  lastName: "Ohtani",
  sayHello: function () {
    console.log(`Hello, my name is ${this.firstName}`);
  },
};

person.sayHello();
