/**
 * Task description: Write a method that reverts input array
 * Expected Result: [1, 2, 3] => [3, 2, 1]
 * Task Complexity: 1 of 5
 * @param {Array} array - Array of any elements
 * @returns {Array}
 */



export const reverse = (array) => {

  let a=[];
  for (let index = array.length-1; index>=0; index--) {
    console.log(index)
    a.push(array[index])
    
  }
  return a;
  //return array.reverse();

};
console.log(reverse([1,2,3,4]))