// const fs = require('fs');
const fsPromises = require('fs').promises;


async function searchFile(dirname, filename){
    // implement code here

        return new Promise(async(resolve, reject)=> {
            const files  = await fsPromises.readdir(dirname);
            files.forEach(async(file)=> {
                let stats =  await fsPromises.stat(dirname + '/' + file)
                if (stats.isFile() && file == filename) {
                    console.log('file found ', file)
                    resolve(file)
                }
                else if (stats.isDirectory()) {
                    searchFile(dirname + '/' + file, filename);
                }
            })
        })

}

async function abc(){
   const fileFound = await searchFile('./files', 'abc.txt');
   console.log('File found in search operation: ', fileFound);
//    if(!fileFound){
//        console.log('No file by this name present');
//    }
}

abc();

// .then(res=> console.log('Searchfile result : ' , res))
// .catch(err=> console.log('Err: ', err))
