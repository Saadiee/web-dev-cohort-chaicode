class Person{
    constructor(fname,lname){
        this.fname = fname;
        this.lname = lname;
    }
    getFullName(){
        if(this.lname !== null){
            return `${this.fname} ${this.lname}`;
        }
    }
}

const person1 = new Person('Saad', 'R');
const person2 = new Person('John', 'Smith');




//******** NOTES ********
// class is blueprint for object
// constructor includes all those properties that we want in that object. If we don't make a constructor in a class the JS runner/compiler/interrupter will make a 'default constructor' and leave it empty like 'constructor(){}'.
// Parameterized Constructor: Constructor shown in above example of Person Class
// function inside the object is called a METHOD
// "new" keyword allocated memory for the object in heap memory and stores the address in the variable on the left side of equal sign.
// In JS everything is an object. Because everything has an Object class as a property
