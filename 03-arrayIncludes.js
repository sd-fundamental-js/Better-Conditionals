// For multiple conditions, use Array.includes

// OK
const checkCarModel = (model) => {
  if(model === 'renault' || model === 'peugeot') {
    console.log('model valid');
  }
}

checkCarModel('renault'); // outputs 'model valid'

// BETTER
// this can originate from an API request or a server constant list, so it can be passed around easily
const models = ['peugeot', 'renault'];

const checkCarModel = (model) => {
  if(models.includes(model)) {
    console.log('model valid');
  }
}

checkCarModel('renault'); // outputs 'model valid'
