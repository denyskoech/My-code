/*Hoisting and TDZ */

//hoisting with variables
console.log(me); //we get undefined
console.log(job); //this is in the TDZ
console.log(year); //in the TDZ

var me = "yonas";
let job = "odijo";
const year = 1991;

//hoisting with functions

console.log(hoisting(3, 2)); //function declarations are hoisted to the top
console.log(funExp(2, 4)); // function expression, this is simply a variable and this is the TDZ
console.log(arrowFunc(2, 5)); // function expression, this is simply a variable and this is the TDZ
console.log(arrowFuncVar(2, 4)); // returns is not a funtion, we are trying to use and undefined function

function hoisting(a, b) {
  return a + b;
} //function declarition

const funExp = function (a, b) {
  return a + b;
};

const arrowFunc = (a, b) => a + b;

var arrowFuncVar = (a, b) => a + b;

//example

if (!numProducts) deleteShopping(); //since undefined is a falsy value, it will go ahead and execute the function which is dangerous

var numProducts = 10;

function deleteShopping() {
  console.log("Zimeenda zote");
}

var f = 1;
let g = 2;
const z = 3;

console.log(f === window.f); //returns true because var creates a property in the global window object on the browser
console.log(g === window.g); //false
console.log(z === window.z); //false

/*The this keyword */

console.log(this); // this is the window object

const jumuishaMiaka = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
jumuishaMiaka(); //this keyword returns undefined because it gets it's own this keyword and in this case, it is undefined

const jumuishaMiakaMshale = (birthYear) => {
  console.log(2923 - birthYear);
  console.log(this);
};
jumuishaMiakaMshale(); //this keyword will return the global lexical scope/ its parent which in this case is the window object. Arrows do not get their own functions so this points to the this keyword in line 547 which is global

const jona = {
  firstName: "Yonas",
  year: 1992,
  calcAge: function () {
    console.log(this);
    console.log(2034 - this.year); //this is how we use this keyword

    //SOLUTION 1 (BEFORE TIMES)
    // const self = this; //use self/that to solve the issue of undefined, we set self to this and store it
    // const isMillenial = function () {
    //   //console.log(this.year >= 1981 && this.year <= 1996); // undefined because this is a regular function and the this word produces undefined when we have regular functions
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillenial();

    //SOLUTIONS 2 Modern solution with arrow function because they don't get their own this keyword
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial(); //it inherits the this keyword from it's parent scope
  },

  greet: () => console.log(`Niaje ${this.firstName}`), // never ever use arrows as methods
};
jona.greet(); //we get undefined and not an error because it looks for this keyword in the global scope (probably from line 547) and not from the object literal which we might assume is a code block
//if we declare a variable firstName with var, remember var creates a property in the global window and now this keyword will go and search for this.firstName in the global window and find the var declared, it is like saying window.firstName
jona.calcAge(); //will return this jona object, this is the method call

const matilda = {
  year: 1994,
};

matilda.calAge = jona.calcAge; //we copied the function from jona to matilda, this is called method borrowing
matilda.calAge(); //this keyword always points to the method that is calling it that is why it is dynamic and not static

const f = jona.calcAge;
f(); //now this becomes a regular function, not attached to any object and it will return an undefined value

// aruguments keyword

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 4); //returns the content passed
addExpr(2, 3, 4, 5, 4); //it is useful when we need a fucntion to add more parameters than specified

var addRow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addRow(2, 3, 4); // arrow functions do not have access to arguments keyword
