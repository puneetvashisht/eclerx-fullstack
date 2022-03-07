// for(var i=0; i<5; i++){
//     setTimeout(function(){
//         console.log(i);
//     }, 2000);
//     console.log('loop..', i)
// }


//Solution

for(var i=0; i<5; i++){
    (function(j){setTimeout(function(){
        console.log(j);
    }, 2000);})(i)
}

