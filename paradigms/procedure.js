// procedure
function getNestedValue(obj, paramName) {
  let tempObj = obj;
  if (typeof paramName !== 'string' || paramName === null) {
    throw new Error('invalid property');
  }
  const parts = paramName.split('.');
  for (let i = 0; i < parts.length; i++) {
    if (typeof tempObj !== 'object') {
      return undefined;
    }
    tempObj = tempObj[parts[i]];
  }

  return tempObj;
}

module.exports = getNestedValue;
