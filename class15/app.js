var userDetail = {
  name: "Umra",
  class: "WMA",
  // printDetails(){
  //     console.log(this.name);

  // }
};
// userDetail.printDetails()
function printDetails(city, country) {
  console.log(this.name, city, country);
}

var userDetail2 = {
  name: "Neha",
  slot: "WMA",
  timing: "4-6",
};

// userDetail.printDetails.call(userDetail2)
printDetails.call(userDetail, "karachi", "Pakistan");
printDetails.apply(userDetail2, ["karachi", "Pakistan"]);
let bindFunc = printDetails.bind(userDetail, "karachi", "Pakistan");
bindFunc();

// let newMap = new Map()
// newMap.set("fname","Umra")
// newMap.set("class","WMA")
// newMap.set("login",()=>{console.log('login')});
// console.log(newMap.get("fname"));
// console.log(newMap.has("classes"));
// console.log(newMap.size);
// newMap.delete("fname")
// newMap.clear()
// console.log(newMap);
// let m = 0;
// var intervalMove = setInterval(animateBox, 10);
// function animateBox() {
//   m = m + 10;
//   if (m == 1400) {
//     clearInterval(intervalMove);
//     var intervalMove2 = setInterval(() => {
//       let box = document.getElementById("box");
//       m = m - 10;
//       box.style.marginLeft = m + "px";
//       if (m == 0) {
//         clearInterval(intervalMove2);
//       }
//     }, 10);
//   }
//   let box = document.getElementById("box");
//   box.style.marginLeft = m + "px";
// }
// let showHwllo = setInterval(()=)


function task1(callback){
    setTimeout(()=>{
        console.log("Task 1 done");
        callback()      
    },4000)
}
function task2(callback){
    setTimeout(()=>{
        console.log("Task 2 done"); 
        callback()     
    },3000)
}
function task3(callback){
    setTimeout(()=>{
        console.log("Task 3 done");  
        callback()    
    },2500)
}
function task4(callback){
    setTimeout(()=>{
        console.log("Task 4 done"); 
        callback()     
    },1000)
}
task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log("All tasks don3");
                
            })
        })
    })
})


