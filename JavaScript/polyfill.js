// -----------Map Polyfill------------------
if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userFun){
        const result = [];
        for(let i = 0; i<this.length; i++){
            let value= userFun(this[i], i)
            result.push(value);
        }
        return result;  
    }
}



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



// -----------ForEach Polyfill------------------
if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFunc){
        for(let i = 0; i<this.length; i++){
            userFunc(this[i],i, this)
        }
    }
}



// -----------Reduce Polyfill------------------
if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function (userFunc, initialValue) {
        let accumulator = initialValue;
        let startIndex = 0;

        // If no initialValue is provided, take the first element as the accumulator
        if (accumulator === undefined) {
            accumulator = this[0];
            startIndex = 1; // Start loop from index 1 since 0 is already used
        }

        for (let i = startIndex; i < this.length; i++) {
            accumulator = userFunc(accumulator, this[i], i, this);
        }

        return accumulator;
    };
}



// -----------Find Polyfill------------------
if (!Array.prototype.myFind) {
    Array.prototype.myFind = function (userFunc) {
        for (let i = 0; i < this.length; i++) {
            if (userFunc(this[i], i, this))
            return this[i]
        }
        return undefined;
    };
}




// -----------Find Index Polyfill------------------
if (!Array.prototype.myFindIndex) {
    Array.prototype.myFindIndex = function (userFunc) {
        for (let i = 0; i < this.length; i++) {
            if(userFunc(this[i],i,this)){
                return i;
            }
        }
        return -1;
    };
}




// -----------Some Polyfill------------------
if (!Array.prototype.mySome) {
    Array.prototype.mySome = function (userFunc) {
        for (let i = 0; i < this.length; i++) {
            if(userFunc(this[i], i, this))
            return true;
        }
        return false;
    };
}




// -----------Every Polyfill------------------
if(!Array.prototype.myEvery){
    Array.prototype.myEvery = function(userFunc){
        for (let i = 0; i < this.length; i++) {
            if(!userFunc(this[i], i, this)){
                return false;
            }    
        }
        return true;
    };
}