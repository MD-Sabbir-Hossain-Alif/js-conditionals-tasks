//* Task - 3 Solution: (Grade Calculator)
//  TODO: Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

export const averageMarks = 89;

if (averageMarks >= 90 && averageMarks <= 100) {
    console.log("Grade: A")
} else if (averageMarks >= 80 && averageMarks < 90) {
    console.log("Grade: B")
} else if (averageMarks >= 70 && averageMarks < 80) {
    console.log("Grade: C")
} else if (averageMarks >= 60 && averageMarks < 70) {
    console.log("Grade: D")
} else if (averageMarks >= 0 && averageMarks < 60) {
    console.log("Grade: F")
} else {
    console.log("Please Provide (0-100)");
}

// Output: Grade: B