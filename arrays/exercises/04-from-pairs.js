/**
 * Task description: Write a method that returns an object composed of key-value pairs.
 * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
 * Task Complexity: 2 of 5
 * @param {Array} array - a deep array of pairs
 * @returns {Object}
 */
export const fromPairs = (array) => {
  return array.reduce((result, [key, value]) => {
    console.log(result,key,value)
    result[key] = value;
    return result;
  }, {});
};

console.log(fromPairs([['a', 1], ['b', 2]]));
