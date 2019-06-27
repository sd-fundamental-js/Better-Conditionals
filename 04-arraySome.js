// For Matching Partial Criteria use Array.some

const cars = [
  { model: 'renault', year: 1956 },
  { model: 'peugeot', year: 1968 },
  { model: 'ford', year: 1977 }
];

const checkForAnyModel = (model) => {
  return cars.some(car => car.model === model);
}

console.log(checkForAnyModel('renault')); // outputs true
