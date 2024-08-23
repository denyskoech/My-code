"use strict";

/*Default parameters*/
const bookings = []; //push the results into this array

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES default values set directly
  //setting default values before ES6
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum, //enhanced object literals
    numPassengers,
    price,
  }; // created an object inside this function
  console.log(booking);
  bookings.push(booking);
};

/*Passing arguments working in functions: primitives and reference*/

const flight = "LH234";
const jonas = {
  name: "Jonas",
  passport: 2345467465,
};

const checkIn = function (flightNum1, passenger) {
  // flightNum1 is like saying flightNum1 = flight, flightNum1 is a copy of flight var
  flightNum1 = "LH999"; //attempt to change flight number but it is a completly different variable
  passenger.name = "Mr. " + passenger.name; //ref type, changing the copy changes the original as well, stored in the heap

  if (passenger.passport === 2345467465) {
    //   alert("Checked in");
    // } else {
    //   alert("Wrong passport");
  }
};

checkIn(flight, jonas);
console.log(flight); //returns original flight number
console.log(jonas); //returns object plus MR included

/*higher order functions, Callback*/
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" "); //some destructuring here, rest operator and string methods, create a space in the string, spaces are values too
  return [first.toUpperCase(), ...others].join(" "); //create a space here, spaces are values too
};
console.log(`noma: ${upperFirstWord("ngori")}`);

//higher order function
const transformer = function (str, fn) {
  console.log(`Original message ${str}`);
  console.log(`Transformed message: ${fn(str)}`); //call back happens here as fn
  console.log(`Courtesy of: ${fn.name}`); //functions have properties too, here the name is either oneWord or UpperFirstWord
};

transformer("Javascript is hard", upperFirstWord); //how to call callback functions, we tell JS to call it later which will happen in the tranformer function
transformer("Javascript is hard", oneWord); //oneWord is the callback function and tranform is the higher order function

/*Functions returning functions */

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`); //because of closures, we are able to call the greeting function from greeterHey
  };
};

const greetHey = greet("Hey"); //this is essentially the returned function, the results of the function returned
greetHey("Jonas");

greet("Hello")("Jonas"); // we can also call both functions this way

//with arrow function
const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`); //no need of the curly braces, just immediatly return the results

/*The call, bind and apply methods */

const kenyaAirways = {
  airline: "Kenya Airways",
  iataCode: "KQ",
  bookings: [],
  book(flightNum2, name2) {
    console.log(
      `${name2} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum2}`
    );

    this.bookings.push({ flight: `${this.iataCode}${flightNum2}`, name2 });
  },
};

kenyaAirways.book(234, "mimi wewe");

//KQ created a new airline, wants bookings for them
const safariLink = {
  airline: "Safari Link",
  iataCode: "SJ",
  bookings: [],
};

const newBooking = kenyaAirways.book; //instead of copying the whole function to the safariLink object(bad practice) we simply store the method in an external function as a new variable and so now we can reuse it because JS has first class functions
// when we want the this keyword to point to either kenyaAirways or safariLink, we have the methods for functions to do that, (call, apply, bind)
//newBooking(23, 'Jdfs') this won't work, this points to undefined

//call() method
newBooking.call(safariLink, 23, "adwrwr"); //we use call to call newBooking function with this keyword pointing to safariLink and then the arguments passed
newBooking.call(kenyaAirways, 234, "weka weka"); /////property names in all objects utilizing newBooking function have to have the same names

console.log(kenyaAirways);

//apply() method,
const flightData = [453, "George Pooper"]; //apply takes data from an array, it does not receive a list of arguments after the this keyword
newBooking.apply(safariLink, flightData); //so list the function, the apply method, the object and the array but this is no longer in use in JS
//instead, we use the spread operator as such below
newBooking.call(safariLink, ...flightData); //spread the array in as args, spread unpacks arrays into individual elements so it makes it possible to use call method and spread the array just as a value
console.log(safariLink);

//the Bind metod
const bookSJ = newBooking.bind(safariLink); //the function bookSJ is bound to the newBooking function to safariLink
const bookKQ = newBooking.bind(kenyaAirways); //this is a new binding for KQ
bookSJ(234, "ndio kufika");
bookKQ(255, "haraka hakuna");

const bookKQ23 = newBooking.bind(kenyaAirways, 23); //we can go further and even set the arguments eg flightNum here
bookKQ23("noma sana"); //it got simpler, so we just need to pass in the name

//Bind with the DOM Event listeners

kenyaAirways.planes = 300;
kenyaAirways.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", kenyaAirways.buyPlane.bind(kenyaAirways)); //the event listener is calling the buyplane function/metod, we

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); //we use null to replace the this keyword here since there is no this application, order of args matters, so we set 0.23 rate in stone and only pass the value later

console.log(addVAT(100));

//same thing but as a function returning a function
const highAddTax = (rate) => (value) => value + value * rate;

const partialRate = highAddTax(0.23);

console.log(partialRate(100));

/*Immediately invoked function expressions */

(function () {
  console.log("I am never gonna run again"); //the fucntion value
})(); //we wrap this function in a bracket to trick JS otherwise it expects a name attached to the function and at the end of the function, we immediately call it

//as an arro function
(() => console.log("Never gonna run as straight as an arrow"))();
