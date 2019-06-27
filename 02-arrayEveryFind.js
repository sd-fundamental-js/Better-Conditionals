// For Matching All Criteria use Array.every or Array.find

// BAD
const cars = [
  { model: 'renault', year: 1956 },
  { model: 'peugeot', year: 1968 },
  { model: 'ford', year: 1977 }
];

const checkEveryModel = (model) => {
  let isValid = true;

  for (let car of cars) {
    if (!isValid) {
      break;
    }
    isValid = car.model === model;
  }

  return isValid;
}

console.log(checkEveryModel('renault')); // outputs false


//GOOD
const checkEveryModel = (model) => {
  return cars.every(car => car.model === model);
}

console.log(checkEveryModel('renault')); // outputs false