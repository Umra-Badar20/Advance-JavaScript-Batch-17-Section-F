class Employee {
    constructor(name, designation,salary){
        this.name = name
        this.designation=designation
        this.salary=salary
    }
    login(){
        console.log(`${this.name} Login`);        
    }
    logout(){
        console.log(`${this.name} Logout`);        
    }
    requestLeaves(x){
        console.log(`${this.name} can Request ${x+1} leaves`);        
    }
    preview(){
        console.log(`${this.name} is a ${this.designation} with the salary of ${this.salary}`);        
    }
    hours(){
        console.log(`${this.designation} will work 8 hours per day `);
    }
  
}

//Class Inheritance
class Programmer extends Employee{
    constructor(team){
       super(this.name,this.designation)
       this.team = team
    }

    language(lan){
        console.log(`I use ${lan}`);      
    }
    distribution(x,y){
        super.hours()
        console.log(`${x} hours for coding ${y} hours for debugging`);      
    }
   
}
class Designer extends Employee{
    tools(tool){
        console.log(`I use ${tool}`);      

    }
    distribution(x,y){
        super.hours()
        console.log(`${x} hours for colouring ${y} hours for designing`);      
    }
}


var umra = new Programmer("Umra","Developer", 1000000)
var sameen = new Designer("sameen", "Designer", 3000000)
// umra.login()
// // umra.preview()
// sameen.preview()
// // umra.requestLeaves(5)
// sameen.requestLeaves(5)
// umra.language("Javascript")
// sameen.tools("Adode Illustrator")
umra.distribution(5,3)
sameen.distribution(4,4)