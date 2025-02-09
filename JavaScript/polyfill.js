// -----------Map Polyfill------------------
// if(!Array.prototype.myMap){
//     Array.prototype.myMap = function(userFun){
//         const result = [];
//         for(let i = 0; i<this.length; i++){
//             let value= userFun(this[i], i)
//             result.push(value);
//         }
//         return result;  
//     }
// }



// -----------Filter Polyfill------------------
if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(userFunc){
        let result = []
        for(let i = 0; i<this.length; i++){
            if(userFunc(this[i], i, this)){
                result.push(this[i])
            }
        }
        return result;
    }
}