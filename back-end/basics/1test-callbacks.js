
console.log('starting...');

// time consuming...
function foo(callback){
    setTimeout(()=>{
        console.log("in test function...");
        callback('success from foo')
        // callback(null, "success from foo");
        // callback('failure from foo', null);

    }, 5000)
}

function bar(callback){
    setTimeout(()=>{
        console.log("in test function...");
        callback("success from bar");
    }, 2000)
}

// let result = test();
// console.log(result);

// callback fn
let callbackFn = (err, result)=>{
    console.log(result);
}


//callback hell
foo((result)=>{
    console.log(result);
    bar((result)=>{
        console.log(result);
        bar2((result)=>{
            console.log(result);
            bar3((result)=>{
                console.log(result);
                bar4((result)=>{
                    console.log(result);
                })
            })
        })
    })
})




console.log('finishing....');