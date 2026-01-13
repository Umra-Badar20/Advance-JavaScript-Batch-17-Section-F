var obj = {
    name: "Umra",
    course: "WMA",
    salary: 10000,
    callName(){
        console.log(this.name);
        
    }
}
console.log(Object.entries(obj));
