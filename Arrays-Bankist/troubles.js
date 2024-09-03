/**SHIDA 1 */
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  const newDogJulia = dogsJulia.slice(1, -2);
  const allDogs = [...newDogJulia, ...dogsKate];

  allDogs.forEach(function (dog, num) {
    dog >= 3
      ? console.log(`Dog number ${num + 1} is an adult and is ${dog} years old`)
      : console.log(`Dog number ${num + 1} is still a puppy`);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

/**SHIDA 2 */

const calcAverageHumanAge = function (ages) {
  const dogAge = ages.map(function (age) {
    if (age <= 2) return 2 * age;
    else return 16 + age * 4;
  });
  console.log(dogAge);

  const adultDogs = dogAge.filter(function (f) {
    return f > 18;
  });
  console.log(adultDogs);

  const adultDogsAge =
    adultDogs.reduce(function (acc, r) {
      return acc + r;
    }, 0) / adultDogs.length;
  console.log(adultDogsAge);

  const adultDogsAge2 = adultDogs.reduce(function (acc, r, i, arr) {
    return acc + r / arr.length, 0;
  }); //a good case of using the array provided in the callback function
  console.log(adultDogsAge2);

  return adultDogsAge;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

console.log(avg1);

/**SHIDA 3 */

const calcAverageHumanAgeArrow = ages =>
  ages
    .map(i => (i <= 2 ? 2 * i : 16 + i * 4))
    .filter(f => f >= 18)
    .reduce((acc, r, i, arr) => acc + r / arr.length, 0);
const avg2 = calcAverageHumanAgeArrow([5, 2, 4, 1, 15, 8, 3]);

console.log(avg2);
