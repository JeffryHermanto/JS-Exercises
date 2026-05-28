/*
EXERCISE: Custom Range Printer

Imagine you're building a tiny tool that prints a list of numbers between two values. You give it a start number and an end number, and it should log every number in between — one by one.

Your Task
> Write a function that prints every number from the start number up to the end number (including both).

Example:
printRange(3, 7)
// output: 3 4 5 6 7

> You can start coding now. If you're not sure how to get started, read the hints below:

Hints – Read only if you get stuck:
1. Define a function with two parameters.
   You'll need to give your function two inputs: a starting number and an ending number. Example:
   function printRange(start, end) {
     // your code goes here
   }
2. Use a for loop to go from start to end.
   Inside your function, loop through all the numbers from start to end (including both). Rewatch the lesson on for loops if you don't remember how they work.
   Use the start parameter when initializing the i variable in the first part of the for loop.
   Use the endparameter to define the condition that stops the loop (the second part of the for loop)
3. Test your function with different inputs.
   After defining your function, try calling it like this:
   printRange(1, 5);
   printRange(10, 15);
*/

function printRange(start, end) {
  let result = "";

  for (let i = start; i <= end; i++) {
    result += `${i} `;
  }

  console.log(result.toString());
}

printRange(3, 7);
printRange(1, 5);
printRange(10, 15);
