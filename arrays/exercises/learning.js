//slice(optional start parameter, optional end parameter)

//splice(start, optional delete count, optional items to add)


const food = ['pizza', 'cake', 'salad', 'cookie'];
console.log(food)
const foods=food.slice(-7);
console.log(foods)
const splicedfood=food.splice(1,0,'Maggi')
console.log(splicedfood)
console.log(food)