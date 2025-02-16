//* Function Declaration
function add(x,y){
    return x + y;
}




//* Function Expression
const subtract = function(x,y){
    return x - y;
}



//* Arrow Function
const multiply = (x,y)=> x*y;










/* First-Class Function
✅ Assign functions to variables
✅ Pass functions as arguments to other functions
✅ Return functions from other functions
✅ Store functions in arrays or objects
*/
function applyOperation(a,b,operation){
    return operation(a,b);
}
const result = applyOperation(10,2,(x,y)=> x / y); // OUTPUT:5










// * This is Tiffen concept
function createCounter(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}
let result1 = createCounter();
console.log(result1); // OUTPUT: [Function (anonymous)]
console.log(result1()); // OUTPUT: 1









// IIFE (Immediately Invoked Function Expression)
(function (){})()