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



let myMap = new Map([["a", 1], ["b", 2]])
myMap.set("fname", "Umra")
myMap.set(1, "Number")
myMap.set(true, "Boolean")
console.log(myMap.get("fname"));
console.log(myMap.has("fnames"));
// myMap.delete("fname")
// myMap.clear()

console.log(typeof myMap, myMap.size,  myMap);

for(let [key, value] of myMap){
    console.log(key, value);    
}
for( let keys of myMap.keys()){
    console.log("key is :", keys);  
}
for( let values of myMap.values()){
    console.log("value is :", values);  
}


myMap.forEach((values, keys)=>{
    console.log("key is" , keys);
    console.log("value is" , values);    
})