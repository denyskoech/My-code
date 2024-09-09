'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = ''; //to empty the container

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

/*Display the balance */

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`;
};
calcDisplayBalance(account1.movements);

/**Display account summary */

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcome = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcome)}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

calcDisplaySummary(account1.movements);

/*creating a username */

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner //creating a new username property in each accounts objects
      .toLowerCase() //string metod
      .split(' ') //The split(' ') method tells JavaScript to look for every space in the string and split the string at each space. This creates an array where each element is one of the words from the original string.
      .map(name => name[0]) //loop over returned array to create a new array of only first letters using an arrow function
      .join(''); //join the letters
  });
};

createUserNames(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

//Slice //this does not mutate the original array, it simply returns a new array, a copy with the extracted elements
console.log(arr.slice(2));
console.log(arr.slice(2, 4)); //it begins after position 2 and ends before position 4
console.log(arr.slice(-2)); //it will start counting from the end of the array, -2 returns the last two elements
console.log(arr.slice(1, -2)); //starts from index 1 and counts two steps back to start from position 3
console.log(arr.slice()); // this creates a shallow copy just the spread operator does below
console.log([...arr]);

//Splice, similar to slice but it changes the original array. So it mutates that array.
arr.splice(-1); //removes the last element
arr.splice(1, 2); //the first number is the position and the second number is the number of elements we want to delete in this case, 2 elements starting from position 1
console.log(arr);

//reverse, this mutates the original array

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2);
console.log(arr2.reverse());

//Concat, does not mutate original arrays

const letters = arr.concat(arr2); // joins two arrays into one
console.log(letters);
console.log([...arr, ...arr2]); //similar to using the spread operator, does not matter which of the 2 you use

//Join
console.log(letters.join('-'));

//ES2022 at metod

const arrAT = [23, 34, 42, 46, 334];
console.log(arrAT[0]); //old way of extraction
console.log(arrAT.at(0)); //using at

//getting last array element without at metod
console.log(arrAT[arrAT.length - 1]);
console.log(arrAT.slice(-1)[0]);
console.log(arr.at(-1)); //with at metod

console.log('jonas'.at(0)); //at metod works with strings as well
console.log('jonas'.at(-1));

/*forEach loop */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for loop

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You have deposited ${movement}`);
  } else {
    console.log(`You have withdrawn ${Math.abs(movement)}`); //math.abs removes the - operator
  }
}

//forEach loop

movements.forEach(function (movement) {
  //forEach is a higher order function which requires a callback function to tell it what to do, really dumb
  if (movement > 0) {
    console.log(`You have deposited ${movement}`);
  } else {
    console.log(`You have withdrawn ${Math.abs(movement)}`);
  }
});

//0: function(200) at position zero, it passes in the value 200
//1: function(200) at position one, it passes in the value 450 etc

//for loop with counter variables

for (const [i, movement] of movements.entries()) {
  //we use the entries metod to get array of arrays which has index and value, we also destructured it
  if (movement > 0) {
    console.log(`Transaction ${i + 1}: You have deposited ${movement}`);
  } else {
    console.log(
      `Transaction ${i + 1}: You have withdrawn ${Math.abs(movement)}`
    ); //math.abs removes the - operator
  }
}

//forEach loop with counter variables

movements.forEach(function (movement, i, arr) {
  //the order here matters, the first parameter always needs to bethe current element, the second parameter always the current index and the third one always the entire array that we are looping over.
  if (movement > 0) {
    console.log(`Transaction ${i + 1}: You have deposited ${movement}`);
  } else {
    console.log(
      `Transaction ${i + 1}: You have withdrawn ${Math.abs(movement)}`
    ); //math.abs removes the - operator
  }
});

//forEach Maps and sets

const currencies = new Map([
  ['USD', 'United States dollar'], //this block is an entry
  ['EUR', 'Euro'], //inside an entry we have a key and a value
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  // same order as arrays
  console.log(`${key}: ${value}`);
});

//sets

const currenciesUnique = new Set(['USD', 'USD', 'EUR', 'KSH', 'USD', 'EUR']);

currenciesUnique.forEach(function (value, _, map) {
  //_ is a throwaway variable, not necessary, used here because of convention, sets don't have keys, just values
  console.log(`${value}: ${value}`);
});

/*Map metod */

const eurToUSD = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUSD;
}); //creates a new array, we store results in the new array

// arrow function version const movementsUSD = movements.map(mov => mov * eurToUSD);

console.log(movements); //original array not mutated
console.log(movementsUSD); // it puts the results into a new array

//with for of loop

const movementsUSDFor = [];
for (const mov of movements) movementsUSDFor.push(mov * eurToUSD);
console.log(movementsUSDFor);

/*Filter metod */

const deposits = movements.filter(function (mov) {
  return mov > 0; //creates a new array of the elements that met this condition in the callback function
});

console.log(deposits);

/*Reduce metod */

const balance = movements.reduce(function (accumulator, element, index) {
  //the first arg is the accumulator
  console.log(`Iteration ${index}: ${accumulator}`);
  return accumulator + element;
}, 0); //0 here is the initial value of the accumulator, where it starts counting

console.log(balance);

//compare for of to reduce

let balance2 = 0; //the is the accumulator

for (const mov of movements) balance2 += mov; //balance2 = balance2 + mov

// Max value

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

console.log(max);

/**Chaining metods */

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr); //to catch an error, we can checkout the array we inherited from filter metod using the arr args provided in the callback function
    return mov * eurToUSD;
  })
  .reduce((acc, mov) => acc + mov, 0); //reduce was called on the map metod array and the map was called from filter and filter was called from movements array creating a chain

console.log(totalDepositsUSD);

/**Find metod */

const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis'); //works well with objects that have similar structures ie keys, this loops through all accounts and searches for a property with the owner of the stated name

console.log(account);
