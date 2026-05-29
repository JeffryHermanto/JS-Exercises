// Exercise: Using map() to Apply Discounts
//
// Objective:
// Learn how to use the JavaScript map() method to create a new array
// by transforming values from an existing array.
//
// Instructions:
// 1. You are given an array called "prices" containing numbers.
// 2. Use the map() method to create a new array called "discountPrices".
// 3. Inside the map() callback function:
//    - Multiply each price by 0.5 to apply a 50% discount.
// 4. Print both arrays to the console:
//    - The original "prices" array
//    - The new "discountPrices" array
//
// Questions to think about:
// - What does map() do?
// - Does map() change the original array?
// - What values are stored in discountPrices?
// - What happens if you change 0.5 to another number like 0.8?
//
// Challenges:
// 1. Change the discount to 25%.
// 2. Round the discounted prices using Math.round().
//    Example:
//    const discountPrices = prices.map((price) => Math.round(price * 0.5));
//
// 3. Create a new array that adds tax instead of applying a discount.
//    (Hint: multiply by a value greater than 1)

const prices = [4, 18, 15, 16, 23, 42];
console.log(prices);

const discountPrices = prices.map((price) => price * 0.5);
console.log(discountPrices);
