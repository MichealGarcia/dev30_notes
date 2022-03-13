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

// ARRAYS AND FUNCTIONS

// What happens if we change an array inside of a function?
// does it change the array? in global?

var addItem = function () {
    family.push('Miguel');
};

// What if you make the array a parameter?
// It will do the same thing if the specific array is the value used
// for the parameter

var removeItem = function (array) {
    family.pop();
};

// BUT, if the array is in the function scope.
// Then it wouldn't exist in the global execution context
// Not unless you use return and declare a variable that will
// hold that functions return.

// If you change the global variable which holds a function returning an array
// Will it change the functions array?

// It doesn't matter because there is nothing pointing to te initial function, unless
// it is saved as a new variable.
// You can declare two functions that will hold the same arrays, to start
// Then change them individually.

var petDogs = function () {
    let dogs = ['Willy', 'Shiloh', 'Kona', 'Anna'];
    return dogs
};

myDogs = petDogs();

herDogs = petDogs();

herDogs.pop();
myDogs.splice(0, 3, 'Cricket', 'Bruster');

// Two separate lists, from one list inside a function.
// Each function call invokes two individual execution context
console.log(herDogs);
console.log(myDogs);


// Arrays can also have arrays inside of them as a data type.

var cookieJar1 = ['cookie 1', 'cookie 2', 'cookie 3', 'cookie 4', 'cookie 5'];
var cookieJar2 = ['cookie 1', 'cookie 2', 'cookie 3', 'cookie 4', 'cookie 5'];
var cookieJar3 = ['cookie 1', 'cookie 2', 'cookie 3', 'cookie 4', 'cookie 5'];

var neighborhoodCookies = [cookieJar1, cookieJar2, cookieJar3];

// In order to call items inside of these nested arrays, you use double square brackets "[][]"

// If I want cookie 3 inside of cookieJar2

let myCookie = neighborhoodCookies[1][2]



// LOOPS
// CREATE A FUNCTION THAT FINDS IF ITEM IN LIST
var names = ['Larissa', 'Sean', 'Haley', 'Deeksha', 'Gunnar'];


var doesLiveHere = function (names, resident) {
    resident = resident.toLowerCase();

    for (let i = 0; i < names.length; i++) {
        // console.log(names[i]);
        let name = names[i]

        name = name.toLowerCase()

        if (name === resident) {
            return true;
        }
    }
    return false;
};


var doesHaleyLiveHere = doesLiveHere(names, 'haley');

console.log(doesHaleyLiveHere);



//  INTRO TO ARRAY HELPER METHODS

// Callback functions

// Whenever you have a function, and when you call it, it calls another function.

// A callback function

// function(function);

// anonomys function

// function(function () {
//     console.log('anon')
// });



// forEach fcuntion = for loop

// Use this when you want to preform an operation on every element in an array.

// there is a lot of syntax in a for loop, a forEach function will reduce the work.

// syntax
var numbers = [1, 2, 3, 4, 5];


numbers.forEach(function (number) {
    console.log(number);
})

// forEach takes anonmous callbuck functions and invokes it for each item


// here is forEach, from scratch:

array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        const element = this[i];

        callback(element);

    }
};

// So, when you call the myForEach function
// 'this' variable is taking the object calling the mthod
// and injecting it as the object in the for loop
// then after the for loop you have code that will run for every iteration
// in this case, or for the forEach() function, it will print out each
// item in the array on a new line.


// forEach also takes two extra parameters, index and array



// numbers === this
// the function is === callback
// 
numbers.myForEach(function (number) {
    console.log(number);
});


// var saveuser = function () {
//     console.log('saving', user.name);
// }

// var saveUSers = function () {
//     var users = [
//         { id: 15, name: 'Bob' },
//         { id: 23, name: 'Jimbo' },
//         { id: 35, name: 'Cathy' }
//     ];

//     for (var i = 0; i < users.length; i++) {
//         saveuser(users[i]);
//     }
// }

// REFACTOR USING forEach

var saveUser = function (user) {
    console.log('saving', user.name);
}

var saveUsers = function () {
    var users = [
        { id: 15, name: 'Bob' },
        { id: 23, name: 'Jimbo' },
        { id: 35, name: 'Cathy' }
    ];

    users.forEach(saveUser);
};

saveUsers();


// Array.prototype.myForEach = function (callback) {
//     for (let i = 0; i < this.length; i++) {

//         callback(this[i], i, this);

//     }
// };





// EXERCISE 2

// use forEach to calculate the volumes of each box

var boxes = [
    { length: 10, width: 15, height: 20 },
    { length: 15, width: 20, height: 25 },
    { length: 20, width: 25, height: 30 },
    { length: 25, width: 30, height: 35 },
    { length: 30, width: 35, height: 40 },
];

var volumes = [];


boxes.forEach(function (box) {
    // console.log(box)
    let volume = box['length'] * box['width'] * box['height'];
    volumes.push(volume);
})

console.log(volumes);

// There is an easier way to do this, with map()


// MAP
// Use this when you want to create a new array that is based on the 
// elements of another array and of similar size.
// 

// You are going to save the new array , 
// by declaring a variable that will run map

var boxes = [
    { length: 10, width: 15, height: 20 },
    { length: 15, width: 20, height: 25 },
    { length: 20, width: 25, height: 30 },
    { length: 25, width: 30, height: 35 },
    { length: 30, width: 35, height: 40 },
];

var volumes = boxes.map(function (box) {
    return box['length'] * box['width'] * box['height'];
});

console.log(volumes);


// another example

var nums = [1, 2, 3];
var increasedNums = [];

for (var i = 0; i < nums.length; i++) {
    increasedNums.push((nums[i] += 5));
};

console.log(increasedNums);

// instead of creating a new array

var increasedNums2 = nums.map(function (num) {
    return num += 5
});

console.log(increasedNums2);

// Making map from scratch

// Add it to Array prototype
Array.prototype.myMap = function (callback) {
    const returnArray = [];

    for (let i = 0; i < this.length; i++) {
        returnArray.push(callback(this[i], i, this))

    }

    return returnArray
};



// Use this next example to think of some use cases

var budgets = [
    { title: "Rent", amount: 1200 },
    { title: "Groceries", amount: 300 },
    { title: "Phone", amount: 50 },
    { title: "Gas", amount: 200 },
    { title: "Internet", amount: 45 },
];

var expenses = budgets.map(function (budget) {
    return budget.amount;
});

console.log(expenses); // [1200, 300, 50, 200, 45];

// finding a budget, allocating funds, allocating data,
// creating a profile (or saving data information from input)?


// map exercise one

// Given an array of budget objects, use map to create an
// array of formatted string describing each budget item.
// EXAMPLE
// {title: 'coffee', amount: 25}
// "coffee (25)"

var budgets = [
    { title: "Rent", amount: 1200 },
    { title: "Groceries", amount: 300 },
    { title: "Phone", amount: 50 },
    { title: "Gas", amount: 200 },
    { title: "Internet", amount: 45 },
];

// we should get an array of strings that look like our example above.

// map object
var budgetItems = budgets.map(function (item) {
    // return budget.title + " (" + budget.amount + ")";
    return (`${item['title']} (${item['amount']})`)
});

console.log(budgetItems);


// Exercise 2

var boxes = [
    { length: 10, width: 15, height: 20 },
    { length: 15, width: 20, height: 25 },
    { length: 20, width: 25, height: 30 },
    { length: 25, width: 30, height: 35 },
    { length: 30, width: 35, height: 40 },
];

var lengths = boxes.map(function (box) {
    return box.length;
});

console.log(lengths);

// exercise 3

var boxes = [
    { length: 10, width: 15, height: 20 },
    { length: 15, width: 20, height: 25 },
    { length: 20, width: 25, height: 30 },
    { length: 25, width: 30, height: 35 },
    { length: 30, width: 35, height: 40 },
];

var volumes = boxes.map(function (box) {
    return box.length * box.width * box.height;
});

console.log(volumes);

// exercise 4
// introucing helper method pluck
// It takes two arguments, and array of objects and a string

var users = [
    { id: 1, name: "Bob", email: "bob@gmail.com" },
    { id: 2, name: "Cindy", email: "cindy@gmail.com" },
    { id: 3, name: "Susan", email: "susan@gmail.com" },
    { id: 4, name: "Sarah", email: "sarah@gmail.com" },
    { id: 5, name: "Tim", email: "tim@gmail.com" },
];

// create a function to grab information
var pluck = function (array, property) {
    // declare a new array to output when called
    newArray = [];
    // use the map function to 
    array.map(function (item) {
        newArray.push(item[property]);
    })

    console.log(newArray);

};

pluck(users, "email"); // returns ['bob@gmail.com', `cindy@gmail.com`, `susan@gmail.com`, `sarah@gmail.com`, `tim@gmail.com` ];

// The issue with my code, is that it console logs the data, it doesnt actually
// return it to the gobal scope.

// more correct code

var pluck = function (array, property) {
    // You will usually save the map function as a new variable.
    return array.map(function (item) {
        // then return the item that you are pushing to the new array.
        return item[property];
    });
};

// the pluck function is being called to find specific items in a database
// you could apply this method to an app to try and look up users/anything.


// find

// Use this when you want to find a particular element in an array.
// It takes a function that returns truthy/falsey value and returns
// the first value in the the array that returns true.
// This does not return a new array.

var users = [
    { id: 1, username: 'Susan19', admin: false },
    { id: 2, username: 'Antonio10', admin: false },
    { id: 3, username: 'Fred15', admin: true },
    { id: 4, username: 'Tim43', admin: false },
    { id: 5, username: 'JimBob59', admin: true },
    { id: 6, username: 'Clark6', admin: false },
    { id: 7, username: 'Jameson35', admin: true },
    { id: 8, username: 'Jessica40', admin: false },
    { id: 9, username: 'Jaleesa13', admin: false },
    { id: 10, username: 'Yoni45', admin: false }
];


// We want to save our value returned by the find function

var selectedUser = users.find(function (user) {
    return user.username === "JimBob59";
});

console.log(selectedUser);


// exercise 2

// return an item that has price less than 100. lessThan100

var shoes = [
    { name: 'Nike', price: 200 },
    { name: 'Red Wings', price: 250 },
    { name: 'Vans', price: 150 },
    { name: 'Converse', price: 160 },
    { name: 'Reebok', price: 130 },
    { name: 'New Balance', price: 175 },
    { name: 'Adidas', price: 95 },
    { name: 'Keds', price: 140 },
    { name: 'Crocs', price: 135 }
];

var lessThan100 = shoes.find(function (shoe) {
    return shoe.price < 100;
});

console.log(lessThan100);


var findWhere = function (array, objCriteria) {
    var property = Object.keys(objCriteria)[0];
    // console.log(property);

    var result = array.find(function (element) {
        return element[property] === objCriteria[property];
    });
    return result;
};

console.log(findWhere(shoes, { price: 95 }));
