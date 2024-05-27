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
  myCountrylanguage; //better way to do it might be to just console.log it and not store all of it as a var
console.log(
  description,
  myCountryPopulation,
  halfMyCountryPopulation,
  populationComparison,
  compareFinlandPopulation,
  populationComparison
);
