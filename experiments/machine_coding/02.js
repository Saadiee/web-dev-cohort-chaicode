const ptaNhi = (fn, delay) => {
    let myId = null
    
    return (...args) => {
        if(myId === null){
            fn(...args);
            myId = setTimeout(() => {
                myId = null
            }, delay);
        }
    }
}

ptaNhi()
ptaNhi()
ptaNhi()