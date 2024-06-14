"use strict";
/*let js = "amazing";

let myCountry = "Kenya";
let myContinent = "Africa";
let myCountryPopulation = 50000000;

console.log(myCountry);
console.log(myContinent);
console.log(myCountryPopulation);
*/

//values and variables
const js = "amazing";

const myCountry = "Kenya";
const myContinent = "Africa";
let myCountryPopulation = 50000000;
console.log(myCountry, myContinent, myCountryPopulation);

console.log(myCountry);
console.log(myContinent);
console.log(myCountryPopulation);

//Data types practise
const isIsland = false;
let myCountrylanguage; //should be const but too much work to change it back
console.log(isIsland, myCountryPopulation, myCountry, myCountrylanguage);

//let, const, var
myCountrylanguage = "Swahili";
console.log(myCountrylanguage);

//Basic operators
let halfMyCountryPopulation = myCountryPopulation / 2;
myCountryPopulation++;
let finlandPopulation = 6000000;
let compareFinlandPopulation = myCountryPopulation > finlandPopulation;
let averagePopulation = 33000000;
let populationComparison = averagePopulation < myCountryPopulation;
let description =
  myCountry +
  " " +
  "is in" +
  " " +
  myContinent +
  " " +
  "and its" +
  " " +
  myCountryPopulation +
  " " +
  "million people speak" +
  " " +
  myCountrylanguage;
console.log(
  description,
  myCountryPopulation,
  halfMyCountryPopulation,
  populationComparison,
  compareFinlandPopulation,
  populationComparison
);

//JS Fundamentals challenge - Part 1

let markWeight = 78;
let johnWeight = 92;
let markHeight = 1.69;
let johnHeight = 1.95;

let markBMI = markWeight / (markHeight * markHeight);
let johnBMI = johnWeight / (johnHeight * johnHeight);

let markHigherBMI = markBMI > johnBMI;

console.log(
  "Marks BMI is" + " " + markBMI + " and Johns BMI is" + " " + johnBMI
);

console.log("Does Mark have a higher BMI than John?" + " " + markHigherBMI);

description = `${myCountry} is in ${myContinent} and it's ${myCountryPopulation} million people speak ${myCountrylanguage}`;
console.log(description); //always put everything in ``

/*const dolphins = 96 + 108 + 89;
const koalas = 88 + 91 + 110;

const scoreDolphins = dolphins / 3;
const scoreKoalas = koalas / 3;

console.log(scoreDolphins, scoreKoalas);

//OR

const scorDolphins = (96 + 108 + 89) / 3; // group them so that they get first execution priority
*/
const scoreDolphins = (97 + 112 + 10) / 3;
const scoreKoalas = (109 + 95 + 10) / 3;

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("We are the champions");
} else {
  console.log("You are all losers");
}

const bill = 2745;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `Your bill is ${bill} and the tip is ${tip}. The total amount is ${
    bill + tip
  }`
);

const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphin = calcAverage(44, 23, 71);
let scoreKoala = calcAverage(85, 54, 41);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(
      `No team wins... (Dolphins ${avgDolphins} vs Koalas ${avgKoalas})`
    );
  }
};

checkWinner(scoreDolphin, scoreKoala);

scoreDolphin = calcAverage(85, 54, 41);
scoreKoala = calcAverage(23, 34, 27);
checkWinner(scoreDolphin, scoreKoala);

/* Write your code below. Good luck! 🙂 */

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

console.log(mark.calcBMI());

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
} else if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
}

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

console.log(Person);

const myDad = new Person("John");
console.log(myDad.firstName);

function pickRandomNumber(num1, num2) {
  // Generate a random number between 0 and 1
  let randomValue = Math.random();

  // Convert the random value to either 0 or 1
  // Multiply by 2 and take the floor to get 0 or 1
  let randomIndex = Math.floor(randomValue * 2);

  // Use the random index to select num1 or num2
  if (randomIndex === 0) {
    return num1;
  } else {
    return num2;
  }
}

// Example usage:
let number1 = 12;
let number2 = 17;
let result = pickRandomNumber(number1, number2);
console.log(`Randomly picked number: ${result}`);
