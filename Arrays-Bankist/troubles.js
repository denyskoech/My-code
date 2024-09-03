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
