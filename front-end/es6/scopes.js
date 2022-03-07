// 1. Scope creation [outer: {x: undefined, inner: undefined}, inner: {x: undefined}]
// 2. Execution [outer: {x: 2, inner: fn}, inner: {x: 3}]

function outer(){
    console.log('outer function');
    var x = 2
    var inner = function(){
        console.log('inner function');
        console.log(x + 2);
        var x = 3;
    }
    return inner;
}

// var result = outer();
// result();

outer()();

// outer(function(){
//     console.log('foo');
// });