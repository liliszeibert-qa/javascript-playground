let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(10 > 5);
console.log(10 < 5);
console.log(10 === 10);
console.log(10 === "10");
console.log(10 == "10");


let password = "12345";

console.log(password === "12345");
console.log(password === 12345);


let username = "Lili";

console.log(username === "Lili" && password === "12345");
console.log(username === "Lili" && password === "wrong");


let isLoggedIn = username === "Lili" && password === "12345";

console.log(isLoggedIn);


let isAdmin = false;

console.log(!isAdmin);