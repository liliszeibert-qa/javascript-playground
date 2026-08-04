const a = 10;
const b = 5;

// Arithmetic operators
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// Comparison operators
console.log(10 > 5);
console.log(10 < 5);
console.log(10 === 10);

// Strict equality compares both value and type.
// Result: false (different data types)
console.log(10 === "10");
// Loose equality converts types before comparing.
// Result: true (the string is converted to a number)
console.log(10 == "10");

const password = "12345";

// Comparing values with different data types
console.log(password === "12345");
console.log(password === 12345);

// Logical operators
const username = "Lili";

console.log(username === "Lili" && password === "12345");
console.log(username === "Lili" && password === "wrong");

// Example: simple login validation
const isLoggedIn = username === "Lili" && password === "12345";

console.log(isLoggedIn);

// NOT operator
const isAdmin = false;

console.log(!isAdmin);
