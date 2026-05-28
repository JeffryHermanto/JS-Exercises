/*
EXERCISE: Abbreviation Generator

Getting a Character from a String with charAt()
To get a specific character from a string, you can use the method charAt(index). The index tells the method which position of the string you want to get.

Your Task
Write a function called abbreviation that takes one string as a parameter. This string will contain multiple words — for example: "New York City".
Your function should return a new string that contains the first letter of each word, in uppercase, combined into a single string.

Example:
console.log(abbreviation("New York City"));          // → "NYC"
console.log(abbreviation("How I met your mother"));  // → "HIMYM"
console.log(abbreviation("game of thrones"));        // → "GOT"

> You can now start coding! If you get stuck, check the hints below 👇

HINTS (read only if you're stuck):
- You can get the first letter of the string with .charAt(0)
- Loop through each character in the string using a for loop
- Inside the loop, check if the current character is a space: if (text.charAt(i) === " ")
- If it is a space, the next character (text.charAt(i + 1)) is the start of the next word
- Add that next character to your result
- Use .toUpperCase() to make sure all abbreviation letters are capitalized
- Don’t forget to return the final abbreviation at the end!
*/

function abbreviation(text) {
  let result = "";

  // Add the first letter of the text
  result += text.charAt(0).toUpperCase();

  // Loop through each character
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) === " ") {
      let nextChar = text.charAt(i + 1);
      result += nextChar.toUpperCase();
    }
  }

  return result;
}

console.log(abbreviation("New York City")); // → "NYC"
console.log(abbreviation("How I met your mother")); // → "HIMYM"
console.log(abbreviation("game of thrones")); // → "GOT"
