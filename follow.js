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

const favourite = Number(prompt("What's your best shot?"));
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
