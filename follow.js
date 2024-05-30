//math operators
const now = 2047; // good idea to declare 2047 as a variable to reuse
const ageUser = now - 1991; //the equal sign is an assignment operator assigning agerUser to now - 1991
const ageClient = now - 2024;
console.log(ageUser, ageClient);

console.log(ageClient * 2, ageUser / 10, 2 ** 3); //2**3 means 2 to the powe of 3 which is 2 x 2 x 2

const firstName = "Dennis";
const lastName = "Koech";
console.log(firstName + "" + lastName); //we add an empty string to separate the variable but there is a better way of doing that using template strings

//assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; //= 100
x++; // x = x + 1 = 101
x--; // 99
console.log(x);

// comparison operators to produce boolean values
console.log(ageClient > ageUser); //<,>, <=, >=
console.log(ageClient >= 18); //check if user is 18 years old, these results should be stored in variables

const isFullAge = ageClient >= 18; //here we have stored the results to a variable

console.log(now - 1991 > now - 2024); //JS will do the math for both ages first before it can compare. Order precedence like BODMAS, find in MDN

let a, y; //it is possible to declare two variables like this which are undefined
a = y = 25 - 10 - 5; //operator precedence, math operators first and then assignment operator
console.log(a, y); //= 10, 10 because the assignment operator works from right to left, assigning 10 to Y and since x is = to y then x also becomes 10

const averageAge = ageClient + ageUser / 2; //this will produce 55.5 which does not make sense because of operatore precedence, to fix, place brackets which will be calculated first and the divided like this (ageClient + ageUser) / 2
console.log(averageAge);

//Strings and template literals
const firstName2 = "Dennis";
const job = "billionaire";
const birthYear = 2005;
const year = 2024;

const dennis =
  "I'm " + firstName2 + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(dennis); // now this is how concatenation was done before ES6

const dennisNew = `I'm ${firstName2}, a ${year - birthYear} year old ${job}!`;
console.log(dennisNew); // using back ticks, we can utilise template literals to make life simpler
console.log(`Just a regular Joe string... I'm I right or what?`); //using backticks to just display regular strings

console.log("This is line one \n and this is \n and three"); //multiline strings in the ancient times, it is not possible to enter to the next line
console.log(`let us 
do something 
different`); //just hit the enter button to go to the next line, no stress, remember to use backticks

//decisions if/else
const age = 17;

if (age >= 18) {
  console.log(`You can drive, baby!`);
} else {
  const yearsLeft = 18 - age;
  console.log(`too bad but you only have ${yearsLeft} years to drive!`);
}

if (age >= 18) {
  console.log(`You can drive, baby!`);
} else {
  const yearsLeft = 18 - age;
  const monthsLeft = yearsLeft * 12;

  let yearsMessage = yearsLeft === 1 ? "1 year" : `${yearsLeft} years`;
  let monthsMessage = `${monthsLeft} months`;

  // Optionally, include months in the message
  if (monthsLeft > 0 && monthsLeft < 12) {
    yearsMessage = monthsLeft === 1 ? "1 month" : `${monthsLeft} months`;
  }

  console.log(`Too bad, but you only have ${yearsMessage} left to drive!`);
}

/*if () {

} else {

}*/ //control structure and also a code block, any variable created inside a code block cannot be accesed outside of the code block

const birthYear2 = 2091;

let century; //defined outside, conditionally defined in the code block
if (birthYear2 <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

//type conversion (done manually)
const inputYear = "1991";
console.log(Number(inputYear)); //we have to convert the string varible into number to perform calculations
console.log(inputYear + 18); //the result of this is a string
console.log(Number(inputYear) + 18); //to make calculations with the string variable, we have to do this, Number has to be in caps, the N

console.log(Number("Dennis")); //we will get a NaN(not a number) message when trying to convert this string to a number
console.log(typeof inputYear);

//type coercion (JS does it for us which is more common)
console.log("I am " + 23 + " years old"); //the + sign triggers a coersion to strings, (string + number = string)
console.log("23" - "10" - 3); //the opposite happens, JS conversts the strings to numbers
console.log("23" * "2"); //converted to number, that is the only way the * can work

let n = "1" + 1;
n = n - 1;
console.log(n);

//truthy, falsy values(0, '', undefined, null, NaN)

console.log(Boolean(0)); //0 falsy
console.log(undefined); //falsy
console.log("Deno"); //string truthy
console.log({}); //object truthy
console.log(""); //empty string falsy

//the above is not how programs work, it is simply an explanation
//below is how JS does type coersion with if else

const money = 0: //zero is falsy
if(money) {
  console.log('You are rich');
} else {
  console.log('Borrow some money to become rich!');
} //the output will be else statement

let height = 0; //not the best approach 
if (height) {
  console.log('It is defined');
} else {
  console.log('Hakuna');
}// returns else block because of 0 but it is a bug 