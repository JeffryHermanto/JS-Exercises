const students = ["Andi", "Budi", "Caca", "Didi", "Eci", "Fulan"];

// Greet each student using greet function that says "Hello Andi" and so forth.
// Write your code here

function greet(student) {
  console.log(`Hello ${student}`);
}

// Solution 1:
for (let i = 0; i < students.length; i++) {
  greet(students[i]);
}

// Solution 2:
students.forEach((student) => greet(student));
