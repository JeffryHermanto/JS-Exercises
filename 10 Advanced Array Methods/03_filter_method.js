/*
EXERCISE: Filtering Arrays with .filter()

------------------------------------------------------------
OBJECTIVE:
Learn how to use the JavaScript .filter() method to extract
specific values from arrays based on conditions.

------------------------------------------------------------
PART 1: Filtering Numbers

You are given an array of numbers from 1 to 10.

Your task:
- Use .filter() to create a new array called evenNumbers
- The new array should only contain even numbers

Hint:
- Even numbers are divisible by 2 (n % 2 === 0)

------------------------------------------------------------
PART 2: Filtering Products

You are given an array of product objects.

Each product has:
- name (string)
- price (number)
- color (string)

Your tasks:

1. Create an array called affordableProducts:
   - Include only products with price less than 200

2. Create an array called whiteProducts:
   - Include only products where color is "white"

3. Create an array called hasPhoneWord:
   - Include products whose name contains the word "phone"
   - Hint: use .includes("phone")

4. Create an array called whiteProductUnder100dollars:
   - Include products where:
     - color is "white"
     - AND price is less than 100

Hint:
Use logical operators (&&) inside filter()

------------------------------------------------------------
IMPORTANT NOTES:
- .filter() does NOT change the original array
- It always returns a NEW array
- You can chain conditions using && or || operators

------------------------------------------------------------
EXPECTED OUTPUTS:

1. evenNumbers → [2, 4, 6, 8, 10]
2. affordableProducts → products under $200
3. whiteProducts → products with color "white"
4. hasPhoneWord → products whose name includes "phone"
5. whiteProductUnder100dollars → white products under $100
*/

// 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((n) => n % 2 === 0);
console.log(evenNumbers);

// 2
const products = [
  { name: "Laptop", price: 499, color: "white" },
  { name: "Smartphone", price: 899, color: "black" },
  { name: "Headphone", price: 50, color: "white" },
  { name: "Tablet", price: 199, color: "grey" },
  { name: "Keyboard", price: 210, color: "blue" },
];

const affordableProducts = products.filter((product) => product.price < 200);
console.log(affordableProducts);

const whiteProducts = products.filter((product) => product.color === "white");
console.log(whiteProducts);

const hasPhoneWord = products.filter((product) =>
  product.name.includes("phone"),
);
console.log(hasPhoneWord);

const whiteProductUnder100dollars = products.filter(
  (product) => product.color === "white" && product.price < 100,
);
console.log(whiteProductUnder100dollars);
