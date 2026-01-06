// hoisting, tdz 

// case 01

// var a = 10;
// let b = 20;
// const c = 30;

// console.log(a,b,c)

// case 02 (early calling)

// console.log(a)
// var a = 10; // undefined
// console.log(b)
// let b = 20; // uninitialized => tdz cannot access before inti
// console.log(c)
// const c = 30;


let num1 = 10;  // num1 uninitiliazed
let num2 = 5; // num2 uninitiliazed
function addNum(val1,val2) { // definition save
    let total = val1 + val2;
    return total
}
let result1 = addNum(num1, num2); // result1 uninitiliazed
// let result2 = addNum(10, 8); // result2 uninitiliazed

// JS runs a program 

//   => creates 1. a global executional context
//   => creates 2. a functional context

// 2 phases 

// 1. memory / creation phase (memory allocate)

//    num1 = undefined / uninitialized
//    num2 = undefined / uninitialized
//    function = definition save 
//    result1 = undefined / uninitialized 
//    result2 = undefined / uninitialized

// 2. execution phase (Assign , and execution)

//    num1 = 10
//    num2 = 5
//    result1 = 15
//    result2 = 10;

//    addNum => ***creates a sandbox / context ( functional context) (new variable environment + execution thread) == > 2 phases 

//          1. creation 

//    num1 = undefined / uninitialized
//    num2 = undefined / uninitialized
//    total = undefined / uninitialized

//           2.memory 

//    val1 = 10
//    val2 = 5
//    total = 15 

//    also it returns to its closest parent executional context 
//    sometimes GEC sometimes the outer function
   
//    delete***

// comes back again to execution phase and adds there

// result 2 ke liye again 
// new sanbox (new variable environment + execution thread)
//  creation 
// same
// execution 
// same 

// and total gets return to gec 

// scope chain (upward)

// var name = "muheerah";
// console.log(name);

// function sayName(){
//     // var name = "sara"
//     console.log(`line number 88, ${name}`)
//     function abc(){
//         // var name = "meera"
//         console.log(`line number 91, ${name}`)
//     }
//     abc()
// }
// sayName();




