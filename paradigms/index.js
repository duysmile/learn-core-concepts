const functionalGetNestedValue = require('./functional');
const procedureGetNestedValue = require('./procedure');

let obj = {
  key1: {
    key2: {
      key3: 'some value',
    },
  },
};

const value = procedureGetNestedValue(obj, 'key1.key2.key3');
console.log('procedure: ', value);

const value1 = functionalGetNestedValue(obj, 'key1.key2.key3');
console.log('functional: ', value1);
