// Grades
// 1. Create a variable called "testGrade" which is a random number between 0 and 100.
// 2. Create a series of conditionals that returns which letter grade corresponds with the score. For reference:
// 0 to 65 is an "F"
// 65 to 70 is a "D"
// 71 to 79 is a "C"
// 80 to 89 is a "B"
// 90 to 100 is an "A"

// defining variable for a random number value for integers 0 through 100.
var testGrade = Math.floor(Math.random() * 101);

// Debuggers
// var testGrade = -1
// console.log(testGrade)

// Running the testGrade value through a conditional statement
// to output a "grade."
if (testGrade >= 0 && testGrade < 65) {
    console.log("F")
} else if (testGrade >= 65 && testGrade <= 70) {
    console.log("D")
} else if (testGrade >= 71 && testGrade <= 79) {
    console.log("C")
} else if (testGrade >= 80 && testGrade <= 89) {
    console.log("B")
} else if (testGrade >= 90) {
    console.log("A")
}
else {
    console.log("No available grade.")
}

// note**
// Large if else statements are generally something to avoid
// We will learn about how another time.
