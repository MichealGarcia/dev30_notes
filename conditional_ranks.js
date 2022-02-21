// Military greetings

// First make three new variables - name(str), rank(str), and age(num).

let name = "Rugen"
let rank = "Captain"
let age = 30

// Create conditionals based on statements

// If our recruit is less than 18, log, 'You are too young for the military!’.

if (age < 18) {
    console.log("You are too young for the military!")
} else if (name.toLowerCase() === "Rugen".toLowerCase() && rank.toLowerCase() === "Count".toLowerCase()) {
    console.log("'My name is Inigo Montoya, you killed my father, prepare to die'")
} else if (rank.toLowerCase() === "Captain".toLowerCase()) {
    console.log(`'Aye Aye Captain ${name}'`)
} else if (rank.toLowerCase() === "Private".toLowerCase() && age > 40) {
    console.log(`'What have you been doing with your life ${name}?'`)
} else {
    console.log(`'Hello ${rank} ${name}, I cannot wait to celebrate your ${age + 1}th birthday next year!'`)
}
