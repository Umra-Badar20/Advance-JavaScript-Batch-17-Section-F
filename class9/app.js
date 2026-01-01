//_______________________ Array Methods
//________________________For Each

//  let arr = [1,2,3,4,5]
//  let updatedArr= [];
//  arr.forEach(num=>{
//     console.log(num+2);

//     updatedArr.push(num+2)
    
//  })
//  console.log(updatedArr);
 
// let arr = [1,2,3,4,5]
// let num = arr.forEach(num1=> num1*2)
// console.log(num);

// ______________________ Map
// let numbers = [1,2,3,4]
// let mapMethod = numbers.map((sum )=> sum * 2)
//  console.log(mapMethod)

 //__________________Filter
// let arr = [1,2,3,4,5,6,7,8]
// let filterArr = arr.filter((num)=> num >= 3)
// console.log(arr);

// console.log(filterArr);

// let arr = [1,2,3,4,5]
// let final = arr.reduce((total,currentelement)=>{
// return total + currentelement
// },0)
// // let final = arr.reduce((total,number)=>total+number)
// console.log(final)

// let numbers = [11,12,13,4,15]
// let result = numbers.every(num => num > 10)
// console.log(result);

// let numbers = [1,2,3,4,5]
// let result = numbers.some(num => num > 10)
// console.log(result);

// let numbers = [1,2,[4,[5]]]
// let result = numbers.flat(2)
// console.log(result);

//find()

let array = [5,12,8,130]

let found = array.find(num => num >10)

console.log(found);

