/*
EXERCISE: Login Simulation with Callbacks

Imagine you’re building a tiny login system for an admin dashboard. You want to check if the username "admin" is provided and the password "1234" is provided.

When that happens, call a callback function that prints something on the console like "Logging into admin account".

Your task:
Write a function called login that takes three parameters:
- username (a string)
- password (a string)
- callback (a function that runs if login is successful)
Check for different kinds of errors like wrong username, wrong password, or when no username or password was entered. For every type of error log a message to the console explaining to the user what went wrong.

If the correct username "admin" and password "1234" was entered, call the callback function that performs a simple console.log.

Examples:
login("admin", "1234", loginAdmin);         // ✅ Correct login
login("", "1234", loginAdmin);              // ❌ Missing username
login("admin", "password123", loginAdmin);  // ❌ Wrong password

> You can now start coding! If you get stuck read the hints below

---

HINTS: Read only if you are stuck

What is an Admin?
An "admin" is the most powerful user in a system that can control important parts of a website that normal users cannot access. For example if you are the host of a blog website with many users, then the users can normally only read your blog posts. The person who writes the blog posts is the admin.

1. Start by checking the inputs
   Before doing any logic, make sure both username and password are actually provided.
   You can check for that with something like:
   if (username === "") or if (!username)
   If one of them is missing, show a clear message using console.log, then return early to stop the function.

2. Check the credentials one by one
   - If the username is not "admin", log an error like "Invalid username"
   - If the password is not "1234", log an error like "Incorrect password"
   Again, return early after each error so that the rest of the code doesn’t run.

3. When everything is correct
   If the username is "admin" and the password is "1234", it's time to run the callback function!
   You can just write: callback();
   That function should then log:
   "Logging into admin account"
*/

function login(username, password, callback) {
  // Early return if inputs are empty
  if (username === "" || password === "") {
    console.log("Error: Username and password cannot be empty");
    return;
  }

  // Check if credentials are correct
  if (username === "admin" && password === "1234") {
    callback(); // Call the callback
    return;
  }

  // If credentials are wrong
  console.log("Login failed: Invalid username or password");
}

function loginAdmin() {
  console.log("Admin Login Successful!");
}

// Test cases
login("admin", "1234", loginAdmin); // ✅ Correct login
login("", "1234", loginAdmin); // ❌ Missing username
login("admin", "wrongpass", loginAdmin); // ❌ Wrong password
