const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'eclerxdb';

// for connecting to db
async function connect() {
  // Use connect method to connect to the server
  return new Promise(async(resolve, reject)=> {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    // the following code examples can be pasted here...
    resolve(db);
  })
  
}

// using the db to fetch all employees
async function findAllEmployees(){
    return new Promise(async(resolve, reject)=>{
        const db = await connect();
        const collection = db.collection('employees');
        const findResult = await collection.find({}).toArray();
        console.log('Found documents =>', findResult);
        resolve(findResult)
    })  
}

async function insertEmployee(emp){
    return new Promise(async(resolve, reject)=>{
        const db = await connect();
        const collection = db.collection('employees');
        const findResult = await collection.insertOne(emp);
        console.log('Found documents =>', findResult);
        resolve();
    })
 }

// findAllEmployees();
// insertEmployee({name: 'test', salary: 777777})

module.exports = {findAllEmployees, insertEmployee};
// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());