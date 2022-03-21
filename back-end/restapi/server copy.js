const http = require('http');


const employees = [
    { id: 1, name: 'Ravi', salary: 11111 },
    { id: 2, name: 'Priya', salary: 22222 },
    { id: 3, name: 'Anu', salary: 33333 }
]

const server = http.createServer(async (req, res) => {
    console.log(req.url);
    // console.log(req);


    if (req.url === '/employees') {
        if (req.method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(employees));
        }
        else if (req.method === 'POST') {
            req.on('data', chunk => {
                console.log(`Data chunk available: ${chunk}`)
                console.log(JSON.parse(chunk));
                employees.push(JSON.parse(chunk))
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(employees));
            })


        }

    }

})

server.listen(3000, () => console.log('Server running on 3000 port'))