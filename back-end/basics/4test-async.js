const axios = require('axios');


  async function test(){
    try{
        let employees = await axios.get('http://localhost:8000/employees');
        console.log(employees.data);

        let products = await axios.get('http://localhost:8000/products');
        console.log(products.data);
    }
    catch(err){
        console.log('Error: ', err);
    }
    
   
}
test();