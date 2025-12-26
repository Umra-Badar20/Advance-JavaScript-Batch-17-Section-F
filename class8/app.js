function iteratorFunction(val) {
  let nextIndex = 0;
  return {
    next() {
      return {
        value: val[nextIndex++],
        done: false,
      };
    },
  };
}
let arr = [1, 2, 3, 4, 5];
let myFunction = iteratorFunction(arr);
console.log(myFunction.next());
console.log(myFunction.next());
console.log(myFunction.next());
console.log(myFunction.next());
console.log(myFunction.next());
console.log(myFunction.next());
console.log(myFunction.next());

let iter = {
    counter : 0,
        next(){
            return{
                value : this.counter++,
                done: this.counter >=10
            }
        }
    }
let next = iter.next()
while(!next.done){
    next = iter.next()
    console.log(next)
}
let str = "fiza";
let itera = str[Symbol.iterator]();
console.log(itera.next());
console.log(itera.next());
console.log(itera.next());
console.log(itera.next());
console.log(itera.next());

function* generatorFunc() {
  console.log("anshara");
  yield "yield 1";
  console.log("sameen");
  yield "yield 2"
  console.log("ruhaba");
}
let g = generatorFunc();
console.log(g.next());
console.log("hello");
console.log(g.next());


//  Modules
import firstname from "./calculate.js";

console.log(firstname.fname);
