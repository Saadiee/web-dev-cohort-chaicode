const throttle = (fn, delay) => {
    let myId = null

    return (...args) => {
    console.log(args)

        if(myId === null){
            fn(...args);
            myId = setTimeout(() => {
                myId = null
            }, delay);
        }
    }
}

throttle(()=>{console.log(1)},300)()
