/**
 * Task description: Write a method that creates a new array with given values
 * Expected Result: (3, 'a') => ['a', 'a', 'a']
 * Task Complexity: 1 of 5
 * @param {number} arraySize - size of array
 * @param {?} value - value to fill
 * @returns {Array}
 */
//  export const fill = (arraySize, value) => Array.from({ length: arraySize }, () => value);
export const fill = (arraySize, value) => {

  //return Array(arraySize).fill(value);


  let a=[];
  for (let index = 0; index < arraySize; index++) {
    a.push(value);
    
  }
  return a;
};
console.log(fill(5,'-1'));
