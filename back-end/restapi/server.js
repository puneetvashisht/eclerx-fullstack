// const http = require('http');
const express = require('express');
const app = express()

const employees = [
    { id: 1, name: 'Ravi', salary: 11111 },
    { id: 2, name: 'Priya', salary: 22222 },
    { id: 3, name: 'Anu', salary: 33333 }
]
// pre req processing...
const logMiddlware1 = (req, res, next) => {
    console.log('Recieved request on date ' + new Date());
    next();
}

const logMiddlware2 = (req, res, next) => {
    console.log(req.method)
    next();
}

// middleware that parses incoming request automatically
app.use(express.json());
app.use(logMiddlware1);



// CRUD
app.get('/employees', (req, res)=>{
    res.json(employees);
})

app.delete('/employees/:id', (req,res)=>{
    console.log(req.params.id);
    // code for actual deletion from array
    employees.splice(req.params.id, 1);
    res.json({success: true})
})

app.patch('/employees/:id', (req,res)=>{
    console.log(req.params.id);
    // code for actual deletion from array
   employees.map((employee, i) => {
       if(employee.id == req.params.id){
           employee.salary = req.body.salary;
       }
   })

   console.log(employees);
   res.json(employees);
})

app.post('/employees', (req, res, next)=>{
    console.log(req.body);
    employees.push(req.body)
    res.status(201).json(employees)
    next();
})

// post req processing...
app.use(logMiddlware2);

app.listen(3000, () => console.log('Server running on 3000 port'))






// const server = http.createServer(async (req, res) => {
//     console.log(req.url);
//     // console.log(req);


//     if (req.url === '/employees') {
//         if (req.method === 'GET') {
//             res.writeHead(200, { 'Content-Type': 'application/json' });
//             res.end(JSON.stringify(employees));
//         }
//         else if (req.method === 'POST') {
//             req.on('data', chunk => {
//                 console.log(`Data chunk available: ${chunk}`)
//                 console.log(JSON.parse(chunk));
//                 employees.push(JSON.parse(chunk))
//                 res.writeHead(201, { 'Content-Type': 'application/json' });
//                 res.end(JSON.stringify(employees));
//             })


//         }

//     }

// })

// server.listen(3000, () => console.log('Server running on 3000 port'))