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

/**optional chaining */

console.log(restaurant.openingHours?.mon?.open); //we can even start by checking if opening hours exists even before we check for opening hours for monday
console.log(restaurant.openingHours.mon?.open); //checks the left side of the operator and only if it exists, it is read

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed'; //when you want to use a variable as a property name, wrap the variable in []. We use the coelescing operator because of the problem of 0 being falsy when checking if restaurant is open and if not, we say closed
  console.log(`on ${day}, we are open at ${open}`);
}

//in arrays
const users = [{ name: 'Jonas', email: 'jonas@me.you' }];

console.log(user[o]?.name ?? 'User array empty'); //if the property name exists, it will log it otherwise, we use the coelescing operator to log something else

/**SETS */

const orderSet = new set([
  'pasta',
  'pizza',
  'pizza',
  'risotto',
  'pasta',
  'pizza',
]);

console.log(orderSet); // logs on three items, the unique items
console.log(new set('Jonas')); //strings are iterables as well, this logs individual letters
console.log(orderSet.size); //checks the size which is 3 becuase it only shows the unique values
console.log(orderSet.has); //this method checks if the set has something
orderSet.add('garlic bread');

for (const order of orderSet) console.log(order); //we can loop through sets, it is an iterable

//example of how to use sets, getting unique values from an array and putting them back in a new array
const staff = ['waiter', 'chef', 'manager', 'waiter', 'chef', 'waiter'];
const staffUnique = [...new set(staff)]; //copied the staff array into this set and used the spread operator to unpack it into a new array and store it in the variable
console.log(staffUnique);

//or, we could just use size to count how many unique values there are
console.log(
  new set(['waiter', 'chef', 'manager', 'waiter', 'chef', 'waiter']).size
);
console.log(new set('jonas').size); //we can count how many letters there are in this string

/**MAPS */

const rest = new Map(); //easiet way to create a map is creating an empyt map without passing anything in it and using the set method to pass arguments as the next line
rest.set();
