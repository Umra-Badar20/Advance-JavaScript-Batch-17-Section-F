//________________________Spread Operator --> Unpacking

//Copying an array/ Obj (Shallow Copy)
var arr = [1, 2, 3];
var cloneArr = [...arr, 4, 5];
// console.log(cloneArr, ...arr);

var obj = {
  name: "Umra",
  dept: "WMA",
  timing: "2-4",
};
var cloneObj = {
  ...obj,
  id: 10261,
};
// console.log(cloneObj, obj);

var str = "Umra";
var cloneStr = [...str];
// console.log(cloneStr);

// Merging
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var mergedArr = [...arr1, false, ...arr2];
// console.log(mergedArr);

var obj1 = {
  name: "Umra",
  dept: "WMA",
  timing: "2-4",
};
var obj2 = {
  edu: "BSSE",
  institute: "SMIT",
};
var mergedObj = { ...obj1, ...obj2 };
// console.log(mergedObj);

//Passing Multiple arguments to a string

let numbers = [1, 2, 3, 4, 5];
function sum(a, b, c, d, e) {
//   console.log(a + b + c + d + e);
}
sum(...numbers); //15 (1,2,3,4,5)
sum(1, 2, 3, 4, 5);
var name = "Umra";
// console.log(...numbers, ...name);



function sum1(...nums) {
  console.log(nums);
  let result = 0
  for(let num of nums){
    result += num
  }
 return result
}
console.log(sum1(2, 3,5,6,5));
