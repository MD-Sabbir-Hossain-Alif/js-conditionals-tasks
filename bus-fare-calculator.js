//* Task - 6 Solution: (Ticket fare Calculator)
//  TODO: Children (age < 10): free Students get a 50 % discount Senior citizens(age >= 60) gets a 15 % Discount Otherwise Regular ticket fare 800 tk

const fare = 800;
const age = 50;
const student = true;

if (age < 10 && age >= 0) {
    console.log("free");
} else if (age < 60 && age >= 10) {
    if (student) {
        const withDiscount = fare - (fare * (50 / 100));
        console.log("You got 50% discount:", withDiscount);
    } else {
        console.log("Regular fare:", fare)
    }
} else if (age >= 60 && age <= 125) {
    const withDiscount = fare - (fare * (15 / 100));
    console.log("You got 15% discount:", withDiscount);
} else {
    console.log("invalid age");
}