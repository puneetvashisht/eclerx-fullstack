const fs = require('fs');
const fsPromises = require('fs').promises;


function searchFile(dirname, filename){
    // implement code here
    fs.readdir(dirname, async(err, files)=>{
        if(err) throw err;
        console.log(files);

        let stats = await fsPromises.stat('./files/test');
        console.log(stats.isDirectory());
        if(stats.isDirectory()){
            // recursive
            searchFile('', filename)
        }
        else{
            
        }
    })


}


searchFile('./files', 'abc.txt')