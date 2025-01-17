/**
 * Task description: Write a method that makes a shallow compare of two arrays and returns true if they are identical.
 * Expected Result: ([1, 2, 3], [1, 2, 3]) => true
 * Task Complexity: 2 of 5
 * @param {Array} firstArray - Array of primitive data types
 * @param {Array} secondArray - Array of primitive data types
 * @returns {boolean}
 */
export const isEqual = (firstArray, secondArray) => {
  if(firstArray.length != secondArray.length){
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {

    if (firstArray[i] != secondArray[i]) {
      return false;
    }}

  return true;
};
console.log('log values',isEqual([1, 2, 3], [1, 2, 3]))
