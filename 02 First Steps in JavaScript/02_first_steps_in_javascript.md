# First Steps in JavaScript

## Summary Cheat Sheet - Key Concepts Recap

Well done for making it this far! 🚀

Before we head into the next section, here’s a quick recap of everything you’ve learned so far. Use this as a mental checklist or a mini reference sheet whenever you feel unsure.

---

## 🧨 Your First JS Code

To add JS inside an HTML file:

```html
<script>
  alert("Hello World");
</script>
```

This shows a popup message!

➡️ Anything inside `<script>` runs as JavaScript  
➡️ `alert()` displays a popup message in the browser  
➡️ Use quotes for text, and end statements with a semicolon

---

## ✅ Syntax Matters!

JS has strict rules (called syntax).

For example:

- Use parentheses when writing a command:

  ```js
  alert("Hi");
  ```

- Use quotes for text:

  ```js
  "Hi";
  "Hi";
  ```

- Use semicolons `;` to separate statements

❌ Mistakes cause syntax errors

🧠 **Tip:** Check the console for error messages!

---

## 📂 External JS Files

Instead of writing JS directly in HTML, you can create a separate `.js` file.

### Step 1: Create a JS file

```js
// app.js
alert("From external file");
```

### Step 2: Link it in your HTML

```html
<script src="app.js"></script>
```

✅ This keeps your code clean and organized!

### 💡 By the way:

If you ever place your `<script src="app.js">` tag inside the `<head>`, it’s a good idea to add the `defer` attribute:

```html
<script src="app.js" defer></script>
```

This tells the browser to wait until the HTML is fully loaded before running the script — which helps prevent errors and keeps the page loading smoothly.

You don’t need it when the script is at the bottom of the `<body>`, but it’s handy to know!

---

## 🧪 Using the Console

The console is a built-in tool in your browser that helps you test, debug, and see what your code is doing.

### To open it in Google Chrome:

Right-click anywhere on the page → **Inspect** → click the **Console** tab

### Use `console.log()` to display messages or results:

```js
console.log("Hello from the console!");
console.log(10 + 5); // Outputs: 15
```

✅ Super useful for:

- Testing small pieces of code
- Checking if your program works
- Printing values while your code runs

---

## 🛠 Debugging with the Console

If your code doesn’t work:

- Check the console for error messages
- JS will tell you what went wrong and which line caused it

---

## 🎉 Final Recap

You’ve learned the core building blocks of JavaScript:

- Writing JS inside `<script>` tags
- Using `alert()`
- Understanding basic syntax rules
- Creating external `.js` files
- Linking JS files with `<script src="">`
- Using `defer`
- Working with the browser console
- Debugging errors with `console.log()` and console messages

These are the tools you’ll use again and again, no matter how advanced you get.

Now let’s move on and start learning the fundamentals of programming in JavaScript 🚀
