# Variables, Data Types & Operators

## Summary Cheat Sheet — Key Concepts Recap

Well done for making it this far! 🚀

Before we head into the next section, here’s a quick recap of everything you’ve learned so far. Use this as a mental checklist or a mini reference sheet whenever you feel unsure.

---

## Variables

### `let`

Use `let` to declare variables that can change.

```js
let name = "Anna";
```

### `const`

Use `const` for values that should never change.

```js
const PI = 3.14;
```

### `var`

`var` exists but is outdated — stick with `let` and `const`.

---

## Data Types

| Type        | Description               | Example      |
| ----------- | ------------------------- | ------------ |
| `String`    | Text in quotes            | `"hello"`    |
| `Number`    | Numeric values            | `42`, `3.14` |
| `Boolean`   | `true` or `false`         | `true`       |
| `undefined` | Declared but no value yet | `let x;`     |
| `null`      | Intentional empty value   | `null`       |

> Others come later: objects, arrays, functions...

---

## `typeof` Operator

Use `typeof` to check what type a value is.

```js
typeof "hi"; // "string"
typeof 99; // "number"
typeof true; // "boolean"
```

---

## Arithmetic Operators

| Operator | Meaning            |
| -------- | ------------------ |
| `+`      | Addition           |
| `-`      | Subtraction        |
| `*`      | Multiplication     |
| `/`      | Division           |
| `%`      | Remainder (modulo) |
| `**`     | Exponentiation     |

Example:

```js
2 ** 3; // 8
```

---

## Type Conversion

You can manually convert values:

```js
String(123); // "123"
Number("456"); // 456

Boolean(0); // false
Boolean("hi"); // true
```

---

## Type Coercion

JavaScript sometimes automatically converts values:

```js
"5" + 1; // "51"  (number becomes string)
"5" - 1; // 4     (string becomes number)

true + 1; // 2
false + 1; // 1
```

> 🧠 **Tip:** Coercion can be weird. When in doubt, use manual conversion!

---

# That’s it! 🎉

You’ve learned the core building blocks of JavaScript. These are the tools you’ll use again and again, no matter how advanced you get.

Now let’s move on and start building more powerful stuff!
