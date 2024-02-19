const nums = [1, 2, 3, 4, 5]
const sum = nums.reduce((total, val) => {
    //console.log('total', total)
    return total + val
}, -15)
console.log(nums, 'sum', sum)

const avg = nums.reduce((total, value, i, { length: len }) => i === len - 1 ? (total + value) / len : total + value)
console.log('avg', avg)

const multiarray = [1, [2, 3], [4, [5, [6, [7, [8, [9]]]]]]]
function flattenArray(arr) {
    return arr.reduce((acc, val) => {
        //console.log(acc)
        return Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val)
    }, [])
}
const flattenedArray = flattenArray(multiarray)
console.log('flattenedArray', flattenedArray)


//transform
const a3 = [{ id: 1, name: 'siva' }, { id: 2, name: 'naga' }, { id: 3, name: 'raju' }]
const y3 = a3.reduce((acc, val) => {
    return { ...acc, [val.id]: val }
}, {})

console.log('transform', y3)


let a4 = ['a', 'b', 'v', 'a', 'a', 'b']
const a5 = a4.reduce((acc, val) => {
    console.log(acc)
    acc[val] ? acc[val] = acc[val] + 1 : acc[val] = 1;
    return acc;
}, {})
console.log(a5)



const data= [1,2,3,4,5]
const datasum = (x)=>x+3;
const dataproduct = (x)=>x*x;

const operArray =[datasum,dataproduct];
const dataresult= operArray.reduce((acc,fn)=>{
    return acc=fn(acc);

},10)
console.log('dataresult',dataresult)

