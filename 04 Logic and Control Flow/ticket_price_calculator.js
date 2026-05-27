/*
EXERCISE: Ticket Price Calculator

Movie Ticket Price Calculator

Imagine you're working at a cinema, and you’ve been asked to write a small script that figures out how much a customer should pay for their movie ticket based on a few simple rules.

We'll use if, else if, and else statements to make decisions in our code. You can test your logic by changing the values of some variables.

> Your goal is to log the correct price to the console based on these rules: 

Age-based pricing:
- Under 3 years old → Free
- 3 to 12 years old → $5
- 13 to 17 years old → $7
- 18 to 64 years old → $10
- 65 or older → $6

Special Discounts:
- If it’s Tuesday, all tickets are only $5 (regardless of age)
- If the person has a loyalty card, they get $2 off the normal price
- Discounts don’t apply to free tickets
Hint: Create your own booleans like isTuesdayto check for these special discounts

> You can start coding now. If you get stuck and don't know how to code this, read the hints below:

Read this only if you need help:
1. Start by setting up your variables.
   Create three variables:
   - age (a number like 25)
   - isTuesday (a boolean: true or false)
   - hasLoyaltyCard (a boolean: true or false)
2. Decide the base price using if, else if, and else.
   Write conditions that check the person's age and assign the correct base price.
   Tip: Start with if (age < 3) and go up from there.
3. Handle Tuesday pricing early.
   Since Tuesday overrides age-based pricing, check if it's Tuesday before the age checks.
   That way, the age doesn’t matter if it’s Tuesday.
4. Apply the loyalty card discount.
   Only apply it if the ticket isn’t free and it's not Tuesday (because Tuesday already gives a reduced price).
   Use a condition like:
   if (price > 0 && !isTuesday && hasLoyaltyCard) { ... }
5. Edge case: Price should never go below zero.
   After applying discounts, make sure the final price is not negative.
   You can add:
   if (price < 0) { price = 0; }
6. Print the final price.
   Use console.log("Your ticket costs $" + price); at the end to show the result.
*/

let age = 30;
let isTuesday = false;
let hasLoyaltyCard = true;

let price;

// Step 1: Determine base price
if (age < 3) {
  price = 0;
} else if (isTuesday) {
  price = 5;
} else if (age <= 12) {
  price = 5;
} else if (age <= 17) {
  price = 7;
} else if (age <= 64) {
  price = 10;
} else {
  price = 6;
}

// Step 2: Apply loyalty card discount (only if it's not Tuesday or a free ticket)
if (price > 0 && !isTuesday && hasLoyaltyCard) {
  price -= 2;
}

// Step 3: Make sure price doesn't go below $0
if (price < 0) {
  price = 0;
}

// Final output
console.log("Your ticket costs $" + price);
