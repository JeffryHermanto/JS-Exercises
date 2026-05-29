/*
EXERCISE: Understanding Array.reduce()

Your Task: Calculate the Total Price

You are working with a list of product prices.
Your goal is to calculate the total sum of all prices using the .reduce() method.

This exercise will help you understand how .reduce() works step by step,
including how the accumulator and current value interact.

------------------------------------------------------------
TASK
------------------------------------------------------------
You are given an array of numbers called "prices".

Use the .reduce() method to calculate the total sum of all values in the array.

The result should be stored in a variable called "totalPrice".

------------------------------------------------------------
WHAT YOU SHOULD OBSERVE
------------------------------------------------------------
Inside the .reduce() callback, there is a console.log statement:

  console.log(`${total} + ${currentPrice} = ${total + currentPrice}`);

This will show how the accumulator ("total") grows with each iteration.

Pay attention to:
- How the total starts at 0 (initial value)
- How each number is added step by step
- How the final result is produced

------------------------------------------------------------
EXPECTED BEHAVIOR
------------------------------------------------------------
For the given array:

const prices = [4, 8, 15, 16, 23, 42];

The console should show step-by-step addition like:
0 + 4 = 4
4 + 8 = 12
12 + 15 = 27
...

And finally:
totalPrice = 108

------------------------------------------------------------
RULES
------------------------------------------------------------
- Use .reduce() to solve the problem
- Do not use loops (for, while)
- Do not manually sum the numbers
- Keep the console.log inside the reducer for debugging/learning purposes

------------------------------------------------------------
GOAL
------------------------------------------------------------
Understand how .reduce() transforms an array into a single value.
*/

const prices = [4, 8, 15, 16, 23, 42];

const totalPrice = prices.reduce((total, currentPrice) => {
  console.log(`${total} + ${currentPrice} = ${total + currentPrice}`);
  return total + currentPrice;
}, 0);

console.log(`totalPrice = ${totalPrice}`);
