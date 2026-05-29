// 1. Create an array named `products` containing objects with the following properties:
//    - name
//    - price
//    - color
//
// 2. Log the original `products` array to the console.
//
// 3. Use the `forEach()` method to loop through the `products` array.
//    Inside the loop, update each product price by reducing it by 50%.
//
// 4. Log the updated `products` array to the console to see the new prices.

const products = [
  { name: "Laptop", price: 499, color: "white" },
  { name: "Smartphone", price: 899, color: "black" },
  { name: "Headphone", price: 50, color: "white" },
  { name: "Keyboard", price: 210, color: "blue" },
];

console.log(products);

products.forEach((product) => {
  product.price = product.price * 0.5;
});

console.log(products);
