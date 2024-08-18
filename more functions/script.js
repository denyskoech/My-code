"use strict";

//Default parameters
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

//Passing arguments working in functions: primitives and reference

const flight
