/*
EXERCISE: Count Items in Stock

Your Challenge: Count Items in Stock
You're working on the inventory dashboard of an online store. Each product in the system has an `inStock` property that tells you whether the item is currently available for purchase.

The store manager wants to know how many products are in stock at any given time. Your job is to write a function that calculates this number.

------------------------------------------------------------

Your Task
Write a function that takes an array of product objects and returns the total number of products that are currently in stock.

Only the `inStock` property is relevant for this task.

------------------------------------------------------------

Requirements
- Use the `reduce()` method to solve this challenge
- Return the number of products where `inStock` is true
- Do not modify the original array
- The function should return a single number

------------------------------------------------------------

Example

countInStock([
  { name: "Phone", inStock: true },
  { name: "Tablet", inStock: false },
  { name: "Monitor", inStock: true }
])

Should return:
2

------------------------------------------------------------

Bonus Challenge
Once your first solution works, try to rewrite it as a one-liner using a ternary expression. A one-liner is a function that has only one line of code inside.

It should still be clear and readable, but much more concise.

This is a good opportunity to practice writing expressive logic inside `reduce()` without sacrificing clarity.

Take your time and try things out — there’s a lot to learn in this short and simple challenge.
*/

function countInStock(products) {
  return products.reduce((count, product) => {
    if (product.inStock) {
      return count + 1;
    }
    return count;
  }, 0);
}

const inStockProducts = countInStock([
  { name: "Phone", inStock: true },
  { name: "Tablet", inStock: false },
  { name: "Monitor", inStock: true },
]);

console.log(inStockProducts);
