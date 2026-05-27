/*
EXERCISE: Variables and Operators

👋 Let’s Get Started with JavaScript Variables!
In this exercise, you're going to practice one of the most important basics in JavaScript: declaring variables and using them to build a meaningful sentence.

🧠 Your Task:
1. Create two variables to store the names of two people. Choose your own names
2. Create two more variables to store their respective ages. Use numbers.
3. Now, calculate their combined age and store it in a new variable.
4. Finally, log a sentence to the console that includes:
    - both names
    - their combined age
   The names are up to you but the sentence should be like this:
   "The combined age of Alice and Bob is 42."
*/

const person1 = "Jeffry";
const person2 = "Chrysan";

const age1 = 48;
const age2 = 46;

const combinedAge = age1 + age2;

console.log(`The combined age of ${person1} and ${person2} is ${combinedAge}`);
