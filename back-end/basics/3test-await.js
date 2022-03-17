
console.log('starting...');

// time consuming...
function foo(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log("in foo function...");
            reject("failure from foo");
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

async function test(){
    try{
        let result1 = await foo();
        console.log(result1);
        
        let result2 = await bar();
        console.log(result2);    
    }
    catch(err){
        console.log('Error: ', err);
    }
    
   
}
test();

// .then(result => console.log(result))
// .catch(err=> console.log('Err: ', err))



console.log('finishing....');