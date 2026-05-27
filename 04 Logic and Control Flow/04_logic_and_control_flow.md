# Logic & Control Flow

## Summary Cheat Sheet – Key Concepts Recap

Great job getting through this section! 💪

This is where code starts to **think, decide, and react** — welcome to the world of **logic and control flow**. Here’s a quick recap of the most important concepts you’ve learned:

---

## Comparison Operators

Used to compare two values. The result is always a boolean (`true` or `false`).

| Operator | Meaning                    |
| -------- | -------------------------- |
| `===`    | Equal value and type       |
| `!==`    | Not equal in value or type |
| `>`      | Greater than               |
| `<`      | Less than                  |
| `>=`     | Greater than or equal      |
| `<=`     | Less than or equal         |

---

## Logical Operators

Used to combine multiple conditions.

| Operator   | Meaning                              |        |                                       |
| ---------- | ------------------------------------ | ------ | ------------------------------------- |
| `&&` (AND) | `true` only if both sides are `true` |        |                                       |
| `          |                                      | ` (OR) | `true` if at least one side is `true` |
| `!` (NOT)  | Inverts a boolean value              |        |                                       |

Examples:

```js
!true; // false
!false; // true
```

---

## `if` Statements

Used to run code only if a condition is `true`.

```js
if (condition) {
  // do something
}
```

---

## `else` & `else if`

- `else` runs when the `if` condition is false.
- `else if` lets you check additional conditions.

```js
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("Try again!");
}
```

---

## Nested `if` Statements

An `if` inside another `if` — useful for more precise control.

```js
if (isMember) {
  if (hasDiscountCode) {
    console.log("Big discount!");
  }
}
```

---

## Short-Circuit Behavior

Logical operators stop as soon as the result is known.

```js
false && anything; // stops early, returns false
true || anything; // stops early, returns true
```

This is called **short-circuit evaluation**, and it can make your code more efficient.

---

## Common Use Case Examples

### Access Control

```js
if (age >= 18 && hasID)
```

### Discounts

```js
if (isMember || hasCoupon)
```

### Negations

```js
if (!loggedIn)
```

---

You’ve just unlocked the real decision-making power of JavaScript 🧠

Now you're ready to write smarter, more dynamic code. Let’s keep going — things are only getting more fun from here. 🚀
