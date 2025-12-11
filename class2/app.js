// function myFunc() {
//   let myname = "Umra";
//   function innerFunc() {
//     console.log(myname);
//     let fatherName = "Badar"
//   }
//   innerFunc();
//   console.log(fatherName);

// }
// myFunc();

// console.log(myname);

// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }
// // makeFunc()
// let callDisplay = makeFunc()
// callDisplay()


// document.getElementById("dark").onclick= function(){
//     document.body.style.backgroundColor = "black"
// }
// document.getElementById("light").onclick= function(){
//     document.body.style.backgroundColor = "pink"
// }



function clickHandler(color){
    //   document.body.style.backgroundColor = `${color}`
    return function(){
        document.body.style.backgroundColor = `${color}`
    }
}
document.getElementById("dark").onclick = clickHandler("black")
document.getElementById("light").onclick = clickHandler("pink")