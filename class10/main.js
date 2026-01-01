import obj, {sub as subtract, multiply} from "./authentication.js"
// import {sub as subtract, multiply} from "./authentication.js"
// console.log(obj.userName);
// obj.sum(2,4)

//Destructuring Obj
let { userName , sum } = obj
console.log(userName);
sum(2,3)

// console.log(sub);
multiply(5,5)
subtract(4,3)

