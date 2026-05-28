# Loops & Repetitions

## Summary Cheat Sheet — Key Concepts Recap

Loops let your code repeat things automatically instead of writing the same line over and over.

This is super useful when counting, checking values, or running something until a condition is met.

---

## `while` Loop

Repeats as long as the condition is `true`.

```javascript
let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}
```

### 🧠 Remember

- Always update the counter (like `i++`) or you’ll create an **infinite loop**
- Great when you **don’t know in advance** how many times you'll loop

---

## `for` Loop

A more compact way to loop when you know how many times to run.

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

### Structure

```javascript
for (start; condition; step) {
  // code
}
```

### 🧠 Useful When

- You know how many steps to take
- You want a tidy, single-line setup

---

## `break` and `continue`

- `break` → stops the loop immediately
- `continue` → skips the current loop round and moves to the next one

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue; // skips 5
  if (i === 9) break; // stops loop at 9

  console.log(i);
}
```

### Example Used

You used `continue` to skip a number, and you’ll see `break` again later when we want to stop based on a certain condition.

---

# 🎉 What You’ve Practiced

✅ Writing loops with clear structure
✅ Using `if` inside loops
✅ Skipping with `continue`
✅ Thinking logically to control repetition

---

You’ve now got full control over repetition in JavaScript.

This is the kind of power that makes your code dynamic, efficient, and fun to write!
