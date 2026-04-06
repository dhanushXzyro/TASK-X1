// Arrow function to receive two inputs and return their sum
const sum = (a, b) => {
  return a + b;
};
console.log(sum(5, 3)); // 8


// Arrow function to return square
const square = (n) => {
  return n * n;
};
console.log(square(4)); // 16


// Arrow function to print Hello World
const hello = () => {
  console.log("Hello World!");
};
hello();


// Arrow function to greet user
const greet = (name) => {
  console.log("Hi " + name);
};
greet("DHANUSH S");


// Arrow function to multiply and print result
const multiply = (a, b) => {
  let result = a * b;
  console.log("Multiplication: " + result);
};
multiply(4, 5);