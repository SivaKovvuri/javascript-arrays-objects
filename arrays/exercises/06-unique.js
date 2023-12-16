/**
 * Task description: Write a method that returns a duplicate-free array
 * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3]
 * Task Complexity: 2 of 5
 * @param {Array<string | number>} array - Array of primitive data types
 * @returns {Array}
 */
export const unique = (array) => {
  return array.reduce((result,element)=>{
      console.log('result',result)
      console.log('element',element)
       if(!result.includes(element)){
        result.push(element)
       }
       return result;
    },[]);
    
};
console.log(unique([1, 2, 3, 1, 2]))