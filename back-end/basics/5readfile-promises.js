const fsPromises = require('fs').promises;

console.log('starting...')

// async
async function abc(){
    try{
        const data = await fsPromises.readFile('./package.json')
        console.log('Contents of file: ' + data)
    }
    catch(err){
        console.log('Err: ', err);
    }
    
}

abc();

// .then(data => console.log('Contents of file: ' + data))



console.log('finishing...')