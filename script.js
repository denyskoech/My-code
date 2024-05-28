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
