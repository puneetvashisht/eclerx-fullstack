const fs = require('fs');

console.log('starting...')

// async
fs.readFile('./package.json', (err, data)=> {
    if(err) throw err;
    console.log('File contents : ' + data);
})

//sync
// const contents = fs.readFileSync('./package.json')
// console.log('File contents : ' + contents);

console.log('finishing...')