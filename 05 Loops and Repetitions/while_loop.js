/*
EXERCISE: Practice the While Loop

Welcome to your first loop! 🌀
In this exercise, you’ll write your very first while loop.
Loops are used to repeat something — super useful when you don’t want to write the same line of code over and over again.

Your Task
> Write a while loop that counts from 1 to 10 and logs every number to the console. Inside the loop, make it so that for the number seven it says. "7 is my favourite number"
Therefore, the logs in the console should say:
1
2
3
4
5
6
'7 is my favourite number'
8
9
10
*/

let counter = 1;

while (counter <= 10) {
  let message = counter;
  if (counter === 7) {
    message += " is my favourite number";
  }
  console.log(message);
  counter++;
}
