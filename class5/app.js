//clousers
function init() {
  var name = "Mozilla"; 
  function displayName() {
    console.log(name);
  }
  return displayName;
}
let instacnce = init();
instacnce()


// classes
class AdmissionForm {
    //initialized by new keyword
    //jn bh object bny ga ye call hojye ga
    constructor(name,grade){
        this.name = name
        this.appliedGrade = grade
    }
    // constructor(){
    //     console.log("constructor called ");    
    // }
    cancel(){
        console.log(`This form is cancelled from ${this.name} for ${this.appliedGrade}`);     
    }
    submit(){
        console.log("This form is submitted from "+ this.name +" "+this.appliedGrade);     
    }
    // fill(name, grade){
    //     this.name = name
    //     this.appliedGrade = grade
    // }
}

let umra = new AdmissionForm("Umra", 8)
let sara = new AdmissionForm("Sara", 6)
// console.log(umra);
// umra.fill("Umra", 9)
umra.cancel()
// sara.fill("Sara", 5)
sara.submit()

