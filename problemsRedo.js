// Answer to more difficult problems


// problem 1
console.log("______________________ \n problem 1")

var numbers = [1, 2, 3, 4];

var products = [];

for (let i = 0; i < numbers.length; i++) {
  var currentNum = numbers[i];
  var nextNum = numbers[i + 1];

  var product = currentNum * nextNum;

  // avoid NaN
  if (product) {
    products.push(product);
  }
};

// // You can use spread syntax to iterate through an objects values(iterables)
// let dog = 12;

// numbers = [...numbers]

let largestProduct = Math.max(...products);

// console.log(numbers)
console.log(products)
console.log(largestProduct);



// Problem 2

console.log("______________________ \n problem 2")

let grades = {
  Ron: [90, 89, 99, 87, 100, 74],
  Leslie: [78, 74, 92, 87, 77, 81],
  Tom: [77, 61, 89, 47, 57, 83],
  Andy: [35, 54, 44, 58, 39, 41]
};
let numGrades = grades[Object.keys(grades)[0]].length


// how big is the data being input
// do a loop for that size
// find a way to get each grade per person
// total of grades for each test
// total number of people
// divide total grades by total number of people.

let testAverages = [];
let currentTest = 0;
// loop through each students tests
for (let i = 0; i < numGrades; i++) {
  // i is the actual test.
  console.log(i); // 0, 1, 2, 3, 4, 5 (expected output)

  // we need to total each test, then push it to a new array as its own value
  let testTotal = 0;
  let totalPeople = 0;


  // this for loop is saying, "for each student in our object.
  // Add together the coinciding value to students test."
  // note: since we loop through the length of all the lists (6), 
  // the next for loop will only take the value at index (i) relevant
  // to the current iteration in the loop
  for (property in grades) {
    // console.log(testTotal, property)
    totalPeople += 1;
    testTotal += grades[property][i];
  };
  // we would just push the averages.  by dividing by total number of people
  testAverages.push(Math.floor(testTotal / totalPeople));
}
console.log(testAverages);
let hardestTest = Math.min(...testAverages);


console.log(hardestTest);

let hardestTestName = testAverages.indexOf(hardestTest) + 1;

console.log(hardestTestName);






// problem 3

console.log("______________________ \n problem 3")


// Write some JavaScript to create a new 
// array based on the overlapping items and the number 
// of times the overlap occurs. 





let array1 = ['a', 'b', 'c', 'a', 'a', 'b', 'd'];

let array2 = ['a', 'b', 'b', 'a', 'e', 'c', 'c', 'g'];



// 1st - create an object that has a property "letter" and their count || array of the like letters

function findOverlappingItems() {

  let result = [];

  const createValueCount = function createValueCount(array) {

    countOfValues = array.reduce(function (letters, letter) {

      if (letter in letters) {
        letters[letter]++;
      } else {
        letters[letter] = 1
      }

      return letters

    }, {});
    return countOfValues

  };

  array1Count = createValueCount(array1);
  array2Count = createValueCount(array2);

  console.log(array1Count);
  console.log(array2Count);

  for (propertyi in array1Count) {
    for (propertyj in array2Count) {
      if (propertyi === propertyj) {
        // console.log(array1Count[propertyi]);


        let frequency = Math.min(array1Count[propertyi], array2Count[propertyj]);
        for (let i = 0; i < frequency; i++) {
          result.push(propertyi)

        }
      }
    }
  }

  return result
};

console.log(findOverlappingItems());
