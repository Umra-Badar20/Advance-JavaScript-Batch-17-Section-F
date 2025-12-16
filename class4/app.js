function sum(...numbers) { // rest operator
  console.log(numbers);
  let res = 0;
  for (nums of numbers) {
    res += nums;
  }
  return res;
}
// console.log(sum(3,4,5,6,3));
var arr = [2, 3, 4, 5, 6];
// console.log(sum(...arr)); // spread operator



//___________Destructuring & Rest operator
//rest parameter =  packing


let arr1 = [1,[2,3],4,5,6]
// console.log(arr1[5]);

let [a,[b,c], ...rest] =arr1
// console.log(a,b,c,rest);


let obj = {
    fname : "Umra",
    qualification : {
        academic: "BSSE",
        courses : "WMA"
    },
    city : "Karachi",
    country : "Pakistan",
    
}
// console.log(obj.fname);

// let {fname, city , country} = obj
// console.log(fname);

let {fname:firstName ,qualification:{academic,course} , ...address } = obj
console.log(firstName);

// console.log(address,academic);



// Enhanced Object literals

let keyName = "Fname";
let accessToken = "sjadb784r3nr2387"
let data = {
    [keyName] : "Sameen",
    fullName(){
        console.log("Sameen");     
    },
    accessToken 
}
// console.log(data);


// Default parameter
function product(a=0,b =0){
    console.log(a*b);
    
}
// product(3,3) //9
// product() //15

// Arrow Functions
let greet = user => "Welcome"+ " " +user
let greet1 = () => "Welcome"+ " " +"Hard cocded name"

console.log(greet("Umra"));
console.log(greet1());

let square  = num => num*num
console.log(square(45));


let subtract = (num1, num2)=> {
   let result =num1-num2
   return result
}
console.log(subtract(7,4));

 