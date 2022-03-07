console.log('starting...');

// function sync(){
//     return "success"
// }
// let result = sync();
// console.log(result);


// callbacks
// function myasync(callback){
//     setTimeout(()=>{
//         // return "success"
//         console.log(callback); 
//         callback("error", null)
//     }, 5000)
// }

// myasync( (err, result) =>console.log(result))


// promises
function myasync(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve("success")
            // reject("failure")
        }, 5000)
    })  
}

// async function test(){
//    let result =  await myasync()
//    console.log(result);
// }

// test();


myasync()
.then((d)=> console.log(d))
.catch(err => console.log('Error: ', err))


// let result = myasync();
// console.log(result);

console.log('finishing..');