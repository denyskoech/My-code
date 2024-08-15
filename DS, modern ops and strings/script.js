'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  // orderDelivery: function ({
  //   starterIndex = 1,
  //   mainIndex = 0,
  //   time = '20:00',
  //   address,
  // }) {
  //   console.log(
  //     `Order received! ${this.starterMenu[starterIndex]} and ${
  //       this.mainMenu[mainIndex]
  //     } will be delivered to ${address``} at ${time}`
  //   );
  // },
};

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

//mutating variables in objects

let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 24 };

//  ({a, b}) = obj;

//the spread operator

const arre = [8, 7, 3];

const newArre = [1, 2, 3, ...arre];

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

/**the for of loop */
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  //this creates an array for each element
  console.log(`${item[0] + 1}: ${item[1]}`); //+ 1 because we are displaying the position at the restaurant from number 1 not 0
} //this is to get the index of the elements as well using entries

for (const [i, el] of menu.entries()) {
  // now we destructred items into i and el because entries create an array for every element
  console.log(`${i + 1}: ${el}`);
}

console.log([...menu.entries()]); //use the spread to expand and put them into an array after that to be able to view them
