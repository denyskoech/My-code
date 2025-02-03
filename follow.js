"use strict";
//math operators
const now = 2047; // good idea to declare 2047 as a variable to reuse
const ageUser = now - 1991; //the equal sign is an assignment operator assigning agerUser to now - 1991
const ageClient = now - 2024;
console.log(ageUser, ageClient);

console.log(ageClient * 2, ageUser / 10, 2 ** 3); //2**3 means 2 to the powe of 3 which is 2 x 2 x 2

let firstName = "Dennis";
const lastName = "Koech";
console.log(firstName + "" + lastName); //we add an empty string to separate the variable but there is a better way of doing that using template strings

//assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; //= 100
x++; // x = x + 1 = 101
x--; // 99
console.log(x);

// comparison operators to produce boolean values
console.log(ageClient > ageUser); //<,>, <=, >=
console.log(ageClient >= 18); //check if user is 18 years old, these results should be stored in variables

const isFullAge = ageClient >= 18; //here we have stored the results to a variable

console.log(now - 1991 > now - 2024); //JS will do the math for both ages first before it can compare. Order precedence like BODMAS, find in MDN

let a, y; //it is possible to declare two variables like this which are undefined
a = y = 25 - 10 - 5; //operator precedence, math operators first and then assignment operator
console.log(a, y); //= 10, 10 because the assignment operator works from right to left, assigning 10 to Y and since x is = to y then x also becomes 10

const averageAge = ageClient + ageUser / 2; //this will produce 55.5 which does not make sense because of operatore precedence, to fix, place brackets which will be calculated first and the divided like this (ageClient + ageUser) / 2
console.log(averageAge);

//Strings and template literals
const firstName2 = "Dennis";
const job = "billionaire";
const birthYear = 2005;
const year = 2024;

const dennis =
  "I'm " + firstName2 + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(dennis); // now this is how concatenation was done before ES6

const dennisNew = `I'm ${firstName2}, a ${year - birthYear} year old ${job}!`;
console.log(dennisNew); // using back ticks, we can utilise template literals to make life simpler
console.log(`Just a regular Joe string... I'm I right or what?`); //using backticks to just display regular strings

console.log("This is line one \n and this is \n and three"); //multiline strings in the ancient times, it is not possible to enter to the next line
console.log(`let us 
do something 
different`); //just hit the enter button to go to the next line, no stress, remember to use backticks

//decisions if/else
const age = 17;

if (age >= 18) {
  console.log(`You can drive, baby!`);
} else {
  const yearsLeft = 18 - age;
  console.log(`too bad but you only have ${yearsLeft} years to drive!`);
}

if (age >= 18) {
  console.log(`You can drive, baby!`);
} else {
  const yearsLeft = 18 - age;
  const monthsLeft = yearsLeft * 12;

  let yearsMessage = yearsLeft === 1 ? "1 year" : `${yearsLeft} years`;
  let monthsMessage = `${monthsLeft} months`;

  // Optionally, include months in the message
  if (monthsLeft > 0 && monthsLeft < 12) {
    yearsMessage = monthsLeft === 1 ? "1 month" : `${monthsLeft} months`;
  }

  console.log(`Too bad, but you only have ${yearsMessage} left to drive!`);
}

/*if () {

} else {

}*/ //control structure and also a code block, any variable created inside a code block cannot be accesed outside of the code block

const birthYear2 = 2091;

let century; //defined outside, conditionally defined in the code block
if (birthYear2 <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

//type conversion (done manually)
const inputYear = "1991";
console.log(Number(inputYear)); //we have to convert the string varible into number to perform calculations
console.log(inputYear + 18); //the result of this is a string
console.log(Number(inputYear) + 18); //to make calculations with the string variable, we have to do this, Number has to be in caps, the N

console.log(Number("Dennis")); //we will get a NaN(not a number) message when trying to convert this string to a number
console.log(typeof inputYear);

//type coercion (JS does it for us which is more common)
console.log("I am " + 23 + " years old"); //the + sign triggers a coersion to strings, (string + number = string)
console.log("23" - "10" - 3); //the opposite happens, JS conversts the strings to numbers
console.log("23" * "2"); //converted to number, that is the only way the * can work

let n = "1" + 1;
n = n - 1;
console.log(n);

//truthy, falsy values(0, '', undefined, null, NaN)

console.log(Boolean(0)); //0 falsy
console.log(undefined); //falsy
console.log("Deno"); //string truthy
console.log({}); //object truthy
console.log(""); //empty string falsy

//the above is not how programs work, it is simply an explanation
//below is how JS does type coersion with if else

const money = 0; //zero is falsy
if (money) {
  console.log("You are rich");
} else {
  console.log("Borrow some money to become rich!");
} //the output will be else statement

let height = 0; //not the best approach
if (height) {
  console.log("It is defined");
} else {
  console.log("Hakuna");
} // returns else block because of 0 but it is a bug

/*Equality Operators: == vs ===*/
const myAge = 18; // if you change this value to a string, loose == will still be true
if (myAge === 18) console.log("Strict, I never do type coersion"); //we don't always need an else statement

if (myAge == 18) console.log("Loose, I do type coersion"); // try to avoid loose as much as possible

/*const favourite = Number(prompt("What's your best shot?"));
console.log(favourite);

if (favourite === 23) {
  // we have to convert the prompt to a number to perform strict equality
  // '23' == 23 for loose but strict will return false
  console.log("That is mine too");
} else if (favourite === 7) {
  console.log("7 is als cool");
} else if (favourite === 9) {
  //you can have as many as you want else if
  console.log("Still cool");
} else {
  console.log("this is just dumb");
}

if (favourite !== 23) console.log("You must be kidding!"); //this is the strict version of the different operator, we are checking to see if the number is not 23
*/
/*Boolean logic, logical operators AND, OR, NOT*/

const hasDriversLicence = true;
const hasGoodVision = false;

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

/*if (hasDriversLicence && hasGoodVision) {
  console.log("Take the wheel");
} else {
  console.log("Find a car seat");
}*/

const isTired = true; //c
console.log(hasDriversLicence || hasGoodVision || isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
  console.log("Take the wheel");
} else {
  console.log("Find a car seat");
}

/*Switch Statement*/

const day = "monday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("I have jim");
    break;
  case "tueday":
    console.log("I dont have jim");
    break;
  case "wedneday":
    console.log("I will run");
    break;
  case "thursday":
    console.log("I will go walking");
    console.log("I have a meeting");
    break;
  case "friday":
  case "saturday":
    console.log("relax balls");
    break;
  case "sunday":
    console.log("eat, pray");
    break;
  default:
    console.log("What calendar is that?");
}

let siku = "tu";

if (siku === "monday") {
  console.log("I have jim");
} else if (siku === "tuesday" || siku === "wednesday") {
  console.log("the or worked");
} else {
  console.log("what day is that?");
}

/*Ternary operator*/

const drinkAge = 23;

const drink = drinkAge >= 18 ? "wine 🍷" : "water 💦"; //we store the value of expression if drinkage is above 18 into variable drink
console.log(drink);

let drink2; //declare variable outside the code block
if (age >= 18) {
  drink2 = "wine"; //assign the varible inside the block
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${drinkAge >= 18 ? "wine 🍷" : "water 💦"}`); //using ternary operator in a template literal because operators are expressions and this makes this easier for something quick

/*Functions*/

function logger() {
  console.log("Hii ni functioni");
}

logger(); // calling the funtion
logger(); // this funtion does not receive any data or send any, very simple funtion to log

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  //console.log(apples, oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

const appleJuice = fruitProcessor(5, 0); // we need to store the values 5 and 0 in a variable
console.log(appleJuice); // this returns juice with 5 and 0 values
console.log(fruitProcessor(5, 0)); //or we can just directly log it without saving the values

const orangeJuice = fruitProcessor(40, 56);
console.log(orangeJuice); //we can reuse the funtion over and over

//function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1988); //you can call this function before it is declared

//function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
};
const age2 = calcAge2(1947);

console.log(age1, age2); //you have to call the funtion expression after it has been declared

//arrow function
const calcAge3 = (birthYeah) => 2038 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

/*const yearsUntilRetirement = (birthYeah, firstDame) => {
  const age = 2057 - birthYeah;
  const retirement = 65 - age;
  return `${firstDame} retires in ${retirement} years`;
};
*/
const calcAge = function (birthYeah) {
  return 2055 - birthYeah;
};

const yearsUntilRetirement = function (birthYeah, firstDame) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstDame} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstDame} has gone home!`);
    return retirement;
  }
};

console.log(yearsUntilRetirement(1971, "Who"));

/*ARRAYS*/

const friends = ["friend1", "friend2", "friend3"]; // this is more normal, the literal syntax
console.log(friends);

const years = new Array(1991, 1998, 1369); // this is an array function because it was called using the parenthesis
console.log(friends[0]);
console.log(friends.length); // .length is a property
console.log(friends[friends.length - 1]); //returns the last value of the array becuase of -1, zero based
friends[2] = "friend4"; //broke up with friend no3 so i mutated the list to add a new friend and this because an array is not a primitive value so it means we can always mutate it
console.log(friends);

const middleName = "Cheru";
const currentYear = 2024;
const birthYear3 = 1923;
const age34 = currentYear - birthYear3;

const myDetails = new Array(middleName, age34, friends);
console.log(myDetails);

const calcMiaka = function (birthYeah) {
  return currentYear - birthYeah;
};

const miaka = [1980, 1985, 1982, 1975];

const miaka1 = calcMiaka(miaka[0]);
const miaka2 = calcMiaka(miaka[miaka.length - 1]);

console.log(miaka1, miaka2);

const mamiaka = [
  calcMiaka(miaka[0]),
  calcMiaka(miaka[2]),
  calcMiaka(miaka[3]),
  calcMiaka(miaka[miaka.length - 1]),
]; //since a variable and an array can hold expressions, you can do the calculations in the array and store them in a variable
console.log(mamiaka);

const newLength = friends.push("friend5"); // .push is a method which is technically a function which call directly on the friends array, this method adds an element at the end
//since push is a funtion, it also returns a value which is a new length which we can capture in a variable but this is not normal
friends.unshift("Friend0"); //add element to the beginning
const popped = friends.pop(); //removes the last element in the array, if you do it twice, it removes 2 elements, you can save it to see which element got popped
const shifted = friends.shift(); //will remove the first element

console.log(shifted);
console.log(friends.indexOf("friend1")); //to see the position of a known element in the array
console.log(friends.includes("bob")); //returns a boolean value

friends.push("Bob");

if (friends.includes("Bob")) {
  const friendLength = friends.indexOf("Bob");
  console.log(`You have a friend called ${friends[friends.length - 1]}`); //awesome, I thought of this all by myself
}

/*OBJECTS*/

const deno = {
  firstName: "Dennis",
  lastName: "SB",
  akoNaDL: false,
  birthYear: 1991,
  mabeshte: ["Jonte", "Mike", "Brayo"],

  /*  calAge: function (birthYear) {
    return 2024 - birthYear;
  }, //we use function expression and not funtion declaration*/

  /*calAge: function () {
    return 2024 - this.birthYear; //this to refer to the birthyear in this object
  },*/

  calAge: function () {
    this.age = 2037 - this.birthYear; // we create a new property (age) here and set it to the expression, this will ensure that we do not calculate the age each time the function is called, it can be tedious for bigger programs, this is the most efficient way
    return this.age;
  },
}; //most basic way of creating an object, object literals

console.log(deno.lastName); // using the dot notation to retrieve values
console.log(deno["lastName"]); //using bracket notation, we can put any expresions here

const nameKey = "Name"; // to store and retrieve both names, follow below
console.log(deno["first" + nameKey]);
console.log(deno["last" + nameKey]); // use bracket notation when you need to compute

const interestedIn = prompt("What do you want to know?"); // ask user to input a value that exists inside the object

if (deno[interestedIn]) {
  //if user picks an existing property in the object, it shows the value of the object
  console.log(deno[interestedIn]);
} else {
  console.log("Oh Reary?"); // if user picks a non existing property in the object, they receive the prompt
}

deno.location = "Mars"; //adding an object using dot notation
deno["twitter"] = "@sbP"; //adding an object using brackets

console.log(
  `${deno.lastName} has ${deno.mabeshte.length} friends and his best friends is called ${deno.mabeshte[1]}`
);

console.log(deno.calAge(1991)); //calling the property calAge just like a normal function
console.log(deno["calAge"](1992)); //calcAge needs to be a string in brackect notation

console.log(
  `${deno.lastName} is a ${deno.calAge()} old student and he ${
    deno.akoNaDL ? "has a driving license" : "does not have a driving licence"
  }`
);

/*LOOPS*/

//for loop keeps running while the condition is true
for (let rep = 1; rep <= 10; rep++) {
  console.log(`You are on rep ${rep}`);
} //we store the reps in a let var because it will be updated with each loop

//looping through an array

const forArray = ["sp", "sb", 7, "shesw", ["Mike", "sho", "dat"]];
const types = [];

for (let i = 0; i < forArray.length; i++) {
  //to get the arrays auto from JS
  console.log(forArray[i]);
  //filling an array 2 ways
  //types.[i] = typeof forArray[i];
  types.push(typeof forArray[i]);
}

const maYears = [1992, 1982, 1983, 1974];
const maAges = [];

for (let i = 0; i < maYears.length; i++) {
  maAges.push(2024 - maYears[i]);
}

console.log(maAges);

for (let i = 0; i < forArray.length; i++) {
  if (typeof forArray[i] !== "string") {
    //if we set it to === string then it will skip the string
    continue;
  }
  console.log(forArray[i], typeof forArray[i]);
}

for (let i = 0; i < forArray.length; i++) {
  if (typeof forArray[i] === "number") {
    // this will print out strings
    break; //stops when it finds a number, it does not execute the iteration that has a number
  }
  console.log(forArray[i], typeof forArray[i]);
}

for (let i = forArray.length - 1; i >= 0; i--) {
  console.log(i, forArray[i]);
}

//loop inside loop
for (let exercise = 1; exercise <= 5; exercise++) {
  console.log(`You doing exercise ${exercise}`);
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`You are on rep ${rep}`);
  }
}

//while loop

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`Your loop ended...`);
  }
}

/*Hoisting and TDZ */

//hoisting with variables
console.log(me); //we get undefined
console.log(job); //this is in the TDZ
console.log(year); //in the TDZ

var me = "yonas";
let job1 = "odijo";
const year1 = 1991;

//hoisting with functions

console.log(hoisting(3, 2)); //function declarations are hoisted to the top
// console.log(funExp(2, 4)); // function expression, this is simply a variable and this is the TDZ
// console.log(arrowFunc(2, 5)); // function expression, this is simply a variable and this is the TDZ
// console.log(arrowFuncVar(2, 4)); // returns is not a funtion, we are trying to use and undefined function

function hoisting(a, b) {
  return a + b;
} //function declarition

const funExp = function (a, b) {
  return a + b;
};

const arrowFunc = (a, b) => a + b;

var arrowFuncVar = (a, b) => a + b;

//example

if (!numProducts) deleteShopping(); //since undefined is a falsy value, it will go ahead and execute the function which is dangerous

var numProducts = 10;

function deleteShopping() {
  console.log("Zimeenda zote");
}

//var f = 1;
let g = 2;
const z = 3;

// console.log(f === window.f); //returns true because var creates a property in the global window object on the browser
// console.log(g === window.g); //false
// console.log(z === window.z); //false

/*The this keyword */

console.log(this); // this is the window object

const jumuishaMiaka = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
jumuishaMiaka(); //this keyword returns undefined because it gets it's own this keyword and in this case, it is undefined

const jumuishaMiakaMshale = (birthYear) => {
  console.log(2923 - birthYear);
  console.log(this);
};
jumuishaMiakaMshale(); //this keyword will return the global lexical scope/ its parent which in this case is the window object. Arrows do not get their own functions so this points to the this keyword in line 547 which is global

const jona = {
  firstName: "Yonas",
  year: 1992,
  calcAge: function () {
    console.log(this);
    console.log(2034 - this.year); //this is how we use this keyword
  },

  greet: () => console.log(`Niaje ${this.firstName}`), // never ever use arrows as methods
};
jona.greet(); //we get undefined and not an error because it looks for this keyword in the global scope (probably from line 547) and not from the object literal which we might assume is a code block
//if we declare a variable firstName with var, remember var creates a property in the global window and now this keyword will go and search for this.firstName in the global window and find the var declared, it is like saying window.firstName
jona.calcAge(); //will return this jona object, this is the method call

const matilda = {
  year: 1994,
};

matilda.calAge = jona.calcAge; //we copied the function from jona to matilda, this is called method borrowing
matilda.calAge(); //this keyword always points to the method that is calling it that is why it is dynamic and not static

const f = jona.calcAge;
f(); //now this becomes a regular function, not attached to any object and it will return an undefined value
