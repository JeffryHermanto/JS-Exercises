/*
EXERCISE: Can you drive | Ternary Operator

Can You Drive? Let’s Use the Ternary Operator!

You’ve just learned about the ternary operator — that little shortcut that can replace a simple if/else statement with a single line of code.

Now it’s time to put it into practice!

Your Task
You’re given a variable called age.

Use the ternary operator to check if the person is old enough to drive.
In most countries, that’s 18 years or older.

If the person is old enough, print this to the console:
You can drive.

If they’re too young, print:
You are too young to drive.

Here’s your starting point:
let age = 17;
// Your code goes here

Hint:
- The ternary operator looks like this:
  condition ? valueIfTrue : valueIfFalse
*/

let age = 17;

console.log(age >= 18 ? "You can drive." : "You are too young to drive.");
