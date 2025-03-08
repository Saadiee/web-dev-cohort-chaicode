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



// ***** Prototypal Inheritance *****
// Parent object
const parent = {
    greet() {
        console.log("Hello from Parent!");
    }
};

// Child object
const child = {
    name: "Alice"
};

// Inherit from parent using __proto__
child.__proto__ = parent;

// Now child can use the greet method from parent
child.greet(); // Output: Hello from Parent!



//******** NOTES ********
/*
Prototype | Prototype Chaining | Objects | Inheritance

* class is blueprint for object
* constructor includes all those properties that we want in that object. If we don't make a constructor in a class the JS runner/compiler/interrupter will make a 'default constructor' and leave it empty like 'constructor(){}'.
* Parameterized Constructor: Constructor shown in above example of Person Class
* function inside the object is called a METHOD
* "new" keyword allocated memory for the object in heap memory and stores the address in the variable on the left side of equal sign. Simply Person class ka prototype uthao ore person1 / person2 mai daal do.
* const person1 = new Person() ===means===> person1.__proto__ = Person.prototype
* In JS everything is an object. Because everything has an Object class as a property
* Class k uper ".prototype" property hoti hai, ore object k uper ".__proto__" property hoti hai
* To get functionality of another different class, instead of setting its ".__proto__" to that class's prototype. We use the word "extends"

*/