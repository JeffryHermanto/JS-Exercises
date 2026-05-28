# Functions | Make your code reusable!

## 🧠 Function Summary Cheat Sheet

This section introduced one of the most powerful concepts in JavaScript: **functions**. Functions help you organize code, reuse logic, and write cleaner, smarter programs.

---

# 📌 What is a Function?

A function is a reusable block of code that performs a specific task.

```js
function sayHello() {
  console.log("Hello!");
}
```

You define a function once and can call it many times:

```js
sayHello(); // "Hello!"
```

---

# 📌 Parameters and Arguments

You can make functions more flexible by passing values into them.

```js
function greet(name) {
  console.log("Hello " + name);
}

greet("John"); // "Hello John"
```

### Key Difference

- **Parameters** → Variables listed in the function definition
- **Arguments** → Actual values passed into the function call

---

# 📌 Return Values

Functions can return data using the `return` keyword.

```js
function add(a, b) {
  return a + b;
}

let result = add(2, 3); // result = 5
```

Once a function hits a `return` statement:

- The function stops executing
- The value is sent back to where the function was called

---

# 📌 Scope

Scope determines where a variable can be accessed in your code.

### Three Main Types of Scope

- Global Scope
- Function Scope
- Block Scope

---

## 🌍 Global Scope

Variables declared outside of any function or block are globally scoped.

They can be accessed from anywhere in your program.

```js
let appName = "My App";

function showName() {
  console.log(appName);
}
```

---

## ⚙️ Function Scope

Variables declared inside a function are only available inside that function.

```js
function test() {
  let message = "Hello";
  console.log(message);
}

// console.log(message); ❌ Error
```

---

## 📦 Block Scope

Variables declared with `let` or `const` inside blocks (`if`, `for`, etc.) only exist within that block.

```js
if (true) {
  let age = 25;
  console.log(age);
}

// console.log(age); ❌ Error
```

`let` and `const` respect block scope, while `var` does not.

---

# 📌 Hoisting

Hoisting is JavaScript behavior where declarations are moved to the top of their scope before code execution.

However, not everything is hoisted the same way.

---

## ✅ Function Declarations ARE Hoisted

Function declarations can be called before they appear in the code.

```js
sayHi();

function sayHi() {
  console.log("Hi!");
}
```

---

## ❌ Function Expressions Are NOT Hoisted

```js
greet(); // ❌ Error: greet is not a function

const greet = function () {
  console.log("Hello!");
};
```

---

# 📌 Callback Functions

A callback is a function passed into another function to be executed later.

```js
function process(callback) {
  console.log("Start");
  callback();
  console.log("End");
}

process(function () {
  console.log("This is the callback");
});
```

Callbacks are heavily used in:

- Timing functions
- User interactions
- Asynchronous JavaScript

---

# ✅ Recap

- Functions = reusable blocks of code
- Parameters allow functions to receive data
- Arguments are the values passed into functions
- `return` sends data back from a function
- Scope controls where variables can be accessed
- Function declarations are hoisted
- Function expressions are not hoisted
- Callbacks make code dynamic and flexible
