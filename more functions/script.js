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
