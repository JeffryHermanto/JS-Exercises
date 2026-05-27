/*
EXERCISE: Online Shop Discount Calculator

Imagine you’re building the checkout logic for an online shop running a huge sale. Customers get a 30% discount if their total purchase amount is $100 or more.

Write a program that:
- Declares a variable totalPrice representing the user’s current purchase amount.
- Checks if totalPrice is enough to get the discount
    - If so, calculate the discounted price by applying a 30% discount and print the discounted total to the console.
    - Otherwise, calculate and print how much more the user needs to spend to qualify for the discount, e.g. when the totalPrice is 85 say: "Spend $15 more to get a 30% discount!".
*/

let totalPrice = 85; // You can change this value to test other cases

if (totalPrice >= 100) {
  let discountedPrice = totalPrice * 0.7; // 30% off means paying 70%
  console.log(discountedPrice);
} else {
  let amountNeeded = 100 - totalPrice;
  console.log(`Spend $${amountNeeded} more to get a 30% discount!`);
}
