/*
EXERCISE: Apply Targeted Discounts

Your Challenge:
You’re working on a pricing feature for an online store.
The store wants to offer category-based discounts (e.g., 20% off electronics or 15% off books).
These discounts should only apply to matching categories, and the original data must not be modified.

------------------------------------------------------------
Your Task:

Write a function that applies a discount to all products in a specific category,
but still returns the full list of products (including those not discounted).

The function should accept three arguments:
1. A list of product objects
2. A category name (string)
3. A discount percentage (number)

------------------------------------------------------------
Requirements:

- Return a NEW array (do not mutate the original array)
- All products must remain in the returned array
- Only products matching the given category should have their price reduced
- All other products should remain unchanged

------------------------------------------------------------
Example:

applyDiscountToCategory(products, "electronics", 20)

This should return a new array where:
- Only products in the "electronics" category have 20% off their price
- All other products remain exactly the same

------------------------------------------------------------
Hint:
You will likely use map() and conditionals (if / ternary operator).

------------------------------------------------------------
Test Data:
Copy the products array below to test your function
*/

const products = [
  {
    name: "Smartphone",
    price: 699,
    category: "electronics",
    rating: 4.5,
    inStock: true,
  },
  {
    name: "Laptop",
    price: 1299,
    category: "electronics",
    rating: 4.8,
    inStock: false,
  },
  {
    name: "Desk Lamp",
    price: 49,
    category: "furniture",
    rating: 4.2,
    inStock: true,
  },
  {
    name: "Office Chair",
    price: 199,
    category: "furniture",
    rating: 4.3,
    inStock: true,
  },
  {
    name: "Wireless Headphones",
    price: 149,
    category: "electronics",
    rating: 4.6,
    inStock: true,
  },
  {
    name: "Bluetooth Speaker",
    price: 89,
    category: "electronics",
    rating: 4.4,
    inStock: false,
  },
  {
    name: "Bookshelf",
    price: 120,
    category: "furniture",
    rating: 4.1,
    inStock: true,
  },
  {
    name: "Yoga Mat",
    price: 35,
    category: "sports",
    rating: 4.5,
    inStock: true,
  },
  {
    name: "Tennis Racket",
    price: 99,
    category: "sports",
    rating: 4.0,
    inStock: true,
  },
  {
    name: "Cookbook",
    price: 29,
    category: "books",
    rating: 4.7,
    inStock: true,
  },
  {
    name: "Sci-Fi Novel",
    price: 19,
    category: "books",
    rating: 4.6,
    inStock: false,
  },
  {
    name: "Gaming Mouse",
    price: 79,
    category: "electronics",
    rating: 4.5,
    inStock: true,
  },
  {
    name: "Monitor",
    price: 299,
    category: "electronics",
    rating: 4.7,
    inStock: true,
  },
  {
    name: "Mechanical Keyboard",
    price: 139,
    category: "electronics",
    rating: 4.6,
    inStock: true,
  },
  {
    name: "LED Strip Lights",
    price: 59,
    category: "electronics",
    rating: 4.3,
    inStock: true,
  },
  {
    name: "Bed Frame",
    price: 399,
    category: "furniture",
    rating: 4.2,
    inStock: true,
  },
  {
    name: "Mattress",
    price: 499,
    category: "furniture",
    rating: 4.5,
    inStock: false,
  },
  {
    name: "Running Shoes",
    price: 129,
    category: "clothing",
    rating: 4.4,
    inStock: true,
  },
  {
    name: "T-Shirt",
    price: 25,
    category: "clothing",
    rating: 4.1,
    inStock: true,
  },
  {
    name: "Winter Jacket",
    price: 189,
    category: "clothing",
    rating: 4.6,
    inStock: false,
  },
  {
    name: "Novelty Mug",
    price: 15,
    category: "kitchen",
    rating: 4.0,
    inStock: true,
  },
  {
    name: "Blender",
    price: 89,
    category: "kitchen",
    rating: 4.4,
    inStock: true,
  },
  {
    name: "Coffee Maker",
    price: 149,
    category: "kitchen",
    rating: 4.7,
    inStock: true,
  },
  {
    name: "Travel Backpack",
    price: 89,
    category: "clothing",
    rating: 4.5,
    inStock: true,
  },
  {
    name: "Water Bottle",
    price: 25,
    category: "sports",
    rating: 4.2,
    inStock: true,
  },
  {
    name: "Electric Toothbrush",
    price: 99,
    category: "electronics",
    rating: 4.5,
    inStock: true,
  },
  {
    name: "Fiction Bestseller",
    price: 24,
    category: "books",
    rating: 4.8,
    inStock: true,
  },
  {
    name: "Study Desk",
    price: 229,
    category: "furniture",
    rating: 4.3,
    inStock: true,
  },
  {
    name: "Puzzle Game",
    price: 39,
    category: "toys",
    rating: 4.4,
    inStock: true,
  },
  {
    name: "Board Game",
    price: 49,
    category: "toys",
    rating: 4.6,
    inStock: true,
  },
];

console.log(products[0].price);

function applyDiscountToCategory(products, category, discountPercent) {
  return products.map((product) => {
    if (product.category === category) {
      // Apply the discount
      const discountedPrice =
        product.price - (product.price * discountPercent) / 100;

      // Return a new object with the updated price
      return {
        ...product,
        price: discountedPrice,
      };
    }

    // Return a copy of the product as-is
    return { ...product };
  });
}

const newProducts = applyDiscountToCategory(products, "electronics", 20);

console.log(newProducts[0].price);
