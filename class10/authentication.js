let userName = "Umra"

function sum(a,b){
    console.log(a+b);
}
export function sub(a,b){
    console.log(a-b);
}
export function multiply(a,b){
    console.log(a*b);   
}


//default export
export default {userName , sum}

// Named Export
// export {sub, multiply} +-
// export {multiply}

