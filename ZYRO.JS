//Arrow function to receive two inputs as parameters and return their sum

const sum = (a, b) => {
    return a + b;
};
console.log(sum(5, 3));

//Arrow function to receive an input as parameter and return its square

const square = (n) => {
    return n * n;
};
console.log(square(4));
//16

//Arrow function to print "Hello World!"

const hello = () => {


    console.log("Hello World!");


};


hello();


//Arrow function to receive the name of the user as parameter and print that name along with a message "HI"


const greet = (name) => {


    console.log("Hi " + name);


};


greet("Bala");


//Arrow function to receive two inputs as parameters, multiply them and store it in a variable, then print that variable's value along with the message "Multiplication:"


const multiply = (a, b) => {


    let result = a * b;


    console.log("Multiplication: " + result);


};


multiply(4, 5);

