// Use Optional Chaining and Nullish Coalescing

// BAD
const car = {
  model: 'Fiesta',
  manufacturer: {
    name: 'Ford',
    address: {
      street: 'Some Street Name',
      number: '5555',
      state: 'USA'
    }
  }
}

// to get the car model
const model = car && car.model || 'default model';
// to get the manufacturer street
const street = car && car.manufacturer && car.manufacturer.address && car.manufacturer.address.street || 'default street';
// request an un-existing property
const phoneNumber = car && car.manufacturer && car.manufacturer.address && car.manufacturer.phoneNumber;

console.log(model) // outputs 'Fiesta'
console.log(street) // outputs 'Some Street Name'
console.log(phoneNumber) // outputs undefined

const checkCarManufacturerState = () => {
  if(car && car.manufacturer && car.manufacturer.address && car.manufacturer.address.state === 'USA') {
    console.log('Is from USA');
  }
}

checkCarManufacturerState() // outputs 'Is from USA'

// BETTER
// to get the car model
const model = car?.model ?? 'default model';
// to get the manufacturer street
const street = car?.manufacturer?.address?.street ?? 'default street';

// to check if the car manufacturer is from the USA
const checkCarManufacturerState = () => {
  if(car?.manufacturer?.address?.state === 'USA') {
    console.log('Is from USA');
  }
}
