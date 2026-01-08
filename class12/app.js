//global variable 
// pori file kahen bhi access ho jaye ga
// var fullName =" sameen fatima"
// var age = 20

// function myName(){
//   console.log(fullName);
  
// }
// myName()

// if (fullName) {
//   console.log("my name is "+ fullName); 
// }

// for (var i = 0; i < age; i++) {
  
// }
// console.log([i]);


//block scop_______
//  console.log(fullName)
//  console.log(age);////////these are TDZ //////////
//  console.log(city);////// ______________//////////                
// {
//   var fullName =" sameen fatima"
//   let age = 20
//   const city = "karachi"

// }


// const person = {
//   name: "sameen",
//   greet: function() {
//     // Yahan 'this' ka
//     //  matlab hai 
//     // 'person' object
//     console.log(`Salam,
//        mera naam ${this.name} 
//        hai.`);
//   }
// };
// person.greet(); // Output: 
// // Salam, mera naam sameen hai.




// console.log(this); 
// // Browser Console mein
// //  Output: Window {window:
// //  Window, ...}

// function simpleFunction() {
//     console.log(this);
// }

// simpleFunction(); 
// // Output: Window (kyunki yeh
// //  function kisi object ka
// //  hissa nahi hai)

// const group = {
//     title: "Batch 2024",
//     students: ["Ali", "Sara"],
    
//     listStudents: function() {
//         // Regular function apna 
//         // 'this' rakhta hai (jo 
//         // 'group' object hai)
//    this.students.forEach((s) => {
//      // Arrow function ne 'this'
//      //  bahar wale listStudents 
//     // function se liya
//     console.log(this.title + ": " + s);
//         });
//     }
// };

// group.listStudents();
// // Output:
// Batch 2024: Ali
// Batch 2024: Sara






// {} function,if{}
// GLOBAL
// var myName = "sameen"
// let myAge = 20
// const myCity = "karachi"

// console.log(myName)

// function mystatus(){
    
//     console.log(myAge);
//     console.log(myCity);
// }
// mystatus()

// for (const i = 0; i < 3; i++) {
    
    
// }
// console.log(myAge);
// console.log(myName);
// console.log(myAge);
// console.log(myCity);
// {
// var myName = "sameen"
// let myAge = 20
// const myCity = "karachi"
// }

// console.log(myName); // stor in hoisting // undefine //
// console.log(myCity); // store in TDZ // not define ,not accessible 
// console.log(myAge); // store in TDZ


// var myName = "sameen"
// let myAge = 20
// const myCity = "karachi"
// console.log(myCity);



// var student ={
//     name: "sameen",
//     city: "karachi",
//     welcomeStudent: function(){
//         console.log(`welcome ${this.name}`);
        
//     }
    
// }
// console.log(student.name);
// student.welcomeStudent()

// console.log(this);

// var name = "unsha"
// let fruits = [1,2,3,4]
// let a = "f"
// console.log(a);//f
// let b = a
// console.log(b);

// b= "a"

// console.log(b);//a

// let a = [1,2,3,4,5] //mutable
// console.log(a);
// let b=a
// console.log(b);
// b.push(6)
// console.log(b);
// console.log(a);
// shallow copy================
// let a =[1,2,3]
// let b=[...a]
// b.push(4)
// console.log(a);
// console.log(b);

// let a = [1,2,[4,[5]],3]
// let b = [...a]
// b[2].push(8)
// console.log(a);
// console.log(b);

// function greet(name){
//     console.log("hello" + name);
// }

let student = (a,b,c) => console.log();
;
