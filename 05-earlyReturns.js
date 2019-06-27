// Return Early Instead of if...else Branching

// BAD
const checkModel = (car) => {
  let result; // first, we need to define a result value

  // check if car exists
  if(car) {

    // check if car model exists
    if (car.model) {

      // check if car year exists
      if(car.year) {
        result = `Car model: ${car.model}; Manufacturing year: ${car.year};`;
      } else {
        result = 'No car year';
      }

    } else {
      result = 'No car model'
    }

  } else {
    result = 'No car';
  }

  return result; // our single return statement
}

console.log(checkModel()); // outputs 'No car'
console.log(checkModel({ year: 1988 })); // outputs 'No car model'
console.log(checkModel({ model: 'ford' })); // outputs 'No car year'
console.log(checkModel({ model: 'ford', year: 1988 })); // outputs 'Car model: ford; Manufacturing year: 1988;'


// BETTER
const checkModel = ({model, year} = {}) => {
  if(!model && !year) return 'No car';
  if(!model) return 'No car model';
  if(!year) return 'No car year';

  // here we are free to do whatever we want with the model or year
  // we made sure that they exist
  // no more checks required

  // doSomething(model);
  // doSomethingElse(year);
  return `Car model: ${model}; Manufacturing year: ${year};`;
}

console.log(checkModel()); // outputs 'No car'
console.log(checkModel({ year: 1988 })); // outputs 'No car model'
console.log(checkModel({ model: 'ford' })); // outputs 'No car year'
console.log(checkModel({ model: 'ford', year: 1988 })); // outputs 'Car model: ford; Manufacturing year: 1988;'
