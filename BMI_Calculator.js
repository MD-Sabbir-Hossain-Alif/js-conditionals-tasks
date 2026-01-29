//* Task - 2 Solution: (BMI Calculator and Health Category)
//  TODO: Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

let weight = 58;
let height = 1.71

const BMI = (weight / (height ^ 2)).toFixed(1);

if(BMI < 18.5 && BMI >= 0) {
    console.log("You are underweight");
} else if (BMI >= 18.5 || BMI <= 24.9) {
    console.log("You are normal");
} else if (BMI >= 25 || BMI <= 29.9) {
    console.log("You are overweight");
} else{
    console.log("You are obese")
}