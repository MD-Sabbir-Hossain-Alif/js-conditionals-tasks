//* Task - 5 Solution: (ternary-number)
//  TODO: you have two numbers in two variables, called: num1, num2. now declare a variable called result. if num1 is bigger than num2 then result will be double of num1.if not, then the value of the variable result will be the sum of num1 and num2. write a simple if-else. also, write it using ternary operator.

const num1 = 50;
const num2 = 90;

if (num1 > num2) {
    const double = num1 * num1;
    console.log(double);
} else {
    const sum = num1 + num2;
    console.log(sum);  // Output: 140
}

const ternaryNum = num1 > num2 ? console.log(num1 * num1) : console.log(num1 + num2); // Output: 140