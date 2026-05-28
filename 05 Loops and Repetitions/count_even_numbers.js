/*
EXERCISE: Count Even Numbers (But Skip One!)

Write a program that counts from 2 to 100, but only prints the even numbers.

However, there's a twist:
If the number is 50, skip it and move on without printing anything.
*/

// Solution 1:
for (let i = 2; i <= 100; i++) {
  if (i % 2 === 0 && i !== 50) {
    console.log(i);
  }
}

// Solution 2:
for (let i = 2; i <= 100; i++) {
  if (i === 50) {
    continue;
  }
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Solution 3:
for (let i = 2; i <= 100; i += 2) {
  if (i !== 50) console.log(i);
}
