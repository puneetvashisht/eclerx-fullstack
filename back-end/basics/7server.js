const http = require('http');
const fsPromises = require('fs').promises;

const server = http.createServer(async(req, res)=> {
    console.log(req.url);
    try{
        const contents = await fsPromises.readFile('files' + req.url)
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('' + contents);
    }
    catch(err){
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('File not found');
    }
    
})

server.listen(3000, ()=>console.log('Server running on 3000 port'))