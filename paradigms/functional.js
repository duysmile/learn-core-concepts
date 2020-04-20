function getNestedValue(obj, paramName) {
  return paramName.split('.').reduce(getValue, obj);
}

function getValue(obj, parameterName) {
  if (typeof parameterName !== 'string' || parameterName === null) {
    throw new Error('Invalid property');
  }

  return typeof obj === 'undefined' ? 'undefined' : obj[parameterName]; 
}

module.exports = getNestedValue;
