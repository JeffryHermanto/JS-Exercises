/*
EXERCISE: Search Products By Name or Category
Your Challenge: Implement a Search Filter

You're working on the product listing page of an online store.
Users should be able to search for products using a text input.
The search should return a list of matching products based on the search term.

This feature needs to be flexible:
Users might search by product name, but also by category.
The search must be case-insensitive.

------------------------------------------------------------
TASK
------------------------------------------------------------
Write a function that filters an array of products based on a given search query.

Function signature:
  searchProduct(products, query)

Arguments:
- products: an array of product objects
- query: a string search term

Return:
- A new array containing only products where either:
  - name contains the search query, OR
  - category contains the search query

------------------------------------------------------------
RULES
------------------------------------------------------------
- Search must be case-insensitive
- Match against BOTH name and category
- Do NOT mutate the original array
- Return a new filtered array
- Only "name" and "category" fields are relevant

------------------------------------------------------------
EXAMPLES
------------------------------------------------------------

searchProduct(products, "Electronics")
→ returns all products in category "electronics" (any capitalization)

searchProduct(products, "Game")
→ returns:
  - "Puzzle Game"
  - "Board Game"

------------------------------------------------------------
PRODUCT DATA
------------------------------------------------------------
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

function searchProduct(products, searchQuery) {
  searchQuery = searchQuery.toLowerCase().trim();

  return products.filter((product) => {
    const name = product.name.toLowerCase();
    const category = product.category.toLowerCase();

    return name.includes(searchQuery) || category.includes(searchQuery);
  });
}

const electronicsProducts = searchProduct(products, "Electronics");
console.log(electronicsProducts);

const gameProducts = searchProduct(products, "Game");
console.log(gameProducts);
