// var array = ['Ravi', 'Amit', 'Rahul']

// let charsArray = array.map((name, i) => name.charAt(0))
// console.log(charsArray);

const first = [1,2,3];
const second = [4,5,6];

// const combined = first.concat(second)

const combined = [...first, ...second] ;
// console.log(combined)




// Cloning the array

const clone = [...first];

clone.push(12);

console.log(clone);
console.log(first);