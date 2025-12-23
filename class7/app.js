//___________________ Iterator Function
function iteratorFunc(val){
    let nextIndex = 0;
    return{
        next(){
           if(nextIndex < val.length){
             return{
                value: val[nextIndex++],
                done: false
            }
           }else{
             return{
                value: val[nextIndex++],
                done: true
            }
           }
        }
    }
}
// let arr = [1,2,3,4,5]
// console.log(arr);

// let arr = "Umra Badar"
// let itret = iteratorFunc(arr)
// console.log(itret.next().value);
// console.log(itret.next());
// itret.next()
// console.log(itret.next());
// console.log(itret.next());
// console.log(itret.next());


//___________________ Iterator Object
// let iter ={
//     counter : 0,
//     next(){
//         return{
//             value: this.counter++ ,
//             done: this.counter >= 10
//         }
//     }
// }
// console.log(iter.next().value);
// console.log(iter.next().value);
// let next = iter.next()
// while(!next.done){
//     next = iter.next()
//     // console.log(next.value);
// }



// let numbers = [100, 200, 300, 400]
let str = "Umra Badar"
// let iter = numbers[Symbol.iterator]()
let iterStr = str[Symbol.iterator]()

// console.log(iterStr.next().value);

// for(let char of str){
//     console.log(char);    
// }



function *generatorFunc(){
    console.log(1);
    console.log(1);
    console.log(1);
    yield "yeild 1"
    console.log(2);
    yield "yeild 2"

    console.log(3);
    yield "yeild 3"
    console.log(4);
    
}
let g = generatorFunc()
console.log(g.next());
console.log("Hello");

console.log(g.next());
console.log(g.next());
console.log(g.next());

