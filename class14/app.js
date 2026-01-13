// let calculate= (x,y,cb)=>{
//     return cb(x,y)
// }

//Method 1
// let add = calculate(2,3,function(num1,num2){
//     return num1+num2
// })
// console.log(/);

//Method 2
// let sub = (x,y) => x-y
// let subtract = calculate(5,3, sub)
// console.log(subtract);

// //Method 3
// function mult(x,y){
//     return x*y
// }
// let multiply = calculate(4,4, mult)
// console.log(multiply);
let btn = document.getElementById("btn")
let saveBtn = document.getElementById("save")
// btn.addEventListener("click",function(){
//     console.log("Hhello"); 
// })

btn.addEventListener("click",handleClick)
saveBtn.addEventListener("click",handleClick)

function handleClick(){
    console.log("Hello");   
}