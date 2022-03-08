// Comparison Operators

// < = Less than
// > = Greater than
// <= = Less than or equal
// >= = Greater than or equal
// === = Equal to
// == = Equal to (works on string to number)
// !== = Not equal to

// Logical Operators

// && = and
// || = or
// ! = "bang" or "not"  i.e. !false === true



// javascript funciton
// Think, if statements as variables

var greet = function () {
    console.log(`Hello, welcome to the party!`);
};

// Functions are 'executables'

// execute it

greet();


// This function call will be ran with, the last declared function with 
// a name greet

greet();

// greet(); call is a right side look up, it is read in the code execution phase
// where the variables are all ran in the left hand look up, or memory.
var greet = function (name) {
    console.log(`Hello ${name}! Welcome to the party!`);
};

// Now the function requires a parameter
//  And will run as undefined inputs.

greet('Susie');
greet('Dooti');

// You can have multiple parameters (arguments) for functions.

var greet = function (guestName, myName) {
    console.log(`${myName}, say's hello to ${guestName}.`);
};

greet('Jon', 'Tom');

//  you can also make default arguments. For wehn there is no input.

var greet = function (myName = 'Tom') {
    console.log(`Hello, ${myName}`);
};
greet();
greet('Jon');

// function declaration vs. function Expression

// Expression
var greet = function () {
    console.log('Hello World');

};

// declaration
function greet() {
    console.log('Hello World!');
};


//  function expression is pointing a variable at a the 
// function itself. it is an anonymous function, since hte function
// itself has no name.

// Function declaration is naming a function. Not just assigning it
// a variable.

// named function declaration.

var greet = function greet() {
    console.log("Hello World!");
};

// Now the fucntion isnt anonymous


// Hoisting

// Hoisting, in JAvascript, is the process of reading the declarations
// and storing in memory, and will be read "first".

// So if you run a code and execute a function before it is ran

// Good to know, but not really something you shoud use.

// Arrow Functions, which in its most basic understanding, makes it 
// so you don't have to type function.

var greet = () => {
    console.log('Hello world!');
};

greet();

// return statement

var add = function (num1, num2) {
    return num1 + num2;
};

// Saving the return to a variable.
var sum = add(5, 2);

// calling sum
console.log(sum)

// If you don't return anything from a function you will get undefined
// You must log or return something to get output. Plus it will exit the function.



// let and const and scope
// When you declare varialbes with let and const inside
// of a block ({}), a new scope is created


// if we used var here, it would run the code, even inside the 'block'

// works
{ var lastName = 'Garcia'; }
// error, lastName not defined
{ let lastName = 'Garcia'; }

console.log(lastName)

// error, lastName not defined, same if we used const.
if (true) {
    let lastName = 'Garcia';
}
console.log(lastName)

// error lastName not defined
if (true) {
    const lastName = 'Garcia';
}
console.log(lastName)


// We get all of our numbers with this, to 9
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//  MAIN POINT, if you use const and let inside of blocks (functions and loops)
// they will create a scope inside those blocks.



// DATA STRUCTURES


// Array

// var family = ['Micheal', 'Larissa', 'Wendy', 'Cat', 'Khriss'];


// 1. Take out the trash
// 2. Go to the store
// 3. Pick up kids from school

// var todo = ['Take out the trash', 'Go to the store']


// Object

// var car = {
//     color: 'red',
//     speed: 'fast',
//     wheels: 4,
//     drive: function () {
//         console.log('vroom!');
//     }
// }

// Data structures help us create relationships between data types.


// Arrays, as ordered lists.

var family = ['Micheal', 'Larissa', 'Wendy', 'Cat', 'Khriss'];

console.log(family.length); // 5


// Every array item has an index. Starting with 0
// You can use the index numbers to access specific items.
console.log(family[0]);
// 'Micheal' = index 0

// Sometimes you want to add items to an array. Either to an existing position
// Or as an addition.
family[5] = 'Willy';


// If you don't know the length of an array

family[family.length] = 'Kona';

// family[family.length] === family[6] 

// Or you could use a built in method for it.

family.push('Shiloh');

// We can also replace items by reassigning an index of an array
// This will replace index 0 with "obb"
family[0] = "Obb";

// There are also many ways to completely removek items from an array

var family = ['Micheal', 'Larissa', 'Wendy', 'Cat', 'Khriss'];

// You can use the .pop() method
// Remove the last item in an array
family.pop();
// remove and store the last item of an array
let lastItem = family.pop();

//  if you use the .shift() method, it will remove front of the array

family.shift()

// The .splice() method will remove items from an index you input to the last item
// But, if you want to remove only one item,the second paramter defines how many items to remove
// so to remove Cat and one ofther, after her.
// I use indexOf() method to give the index number of the name or value I want to remove.

family.splice(family.indexOf('Cat'), 2)

// If I want  to replace a value or several, I add the values as paramters after the index and amount.

family.splice(family.indexOf('Micheal'), 2, 'Becca', 'Jon')
