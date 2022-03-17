
console.log('starting...');

// time consuming...
function foo(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log("in foo function...");
            resolve("success from foo");
        }, 5000)
    })
}

function bar(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log("in bar function...");
            resolve("success from bar");
        }, 2000)
    })
}

foo()
.then(result => console.log(result))
.then(()=>{
    bar()
    .then(result => console.log(result))
    .catch(err=> console.log('Err: ', err))
})
.catch(err=> console.log('Err: ', err))



console.log('finishing....');