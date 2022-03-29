const Product = require('../models/product')


exports.getAllProducts = async(req, res, next) => {

//    const products = await Product.find();
//    res.json(products)

    res.status(200).json(res.advancedQueryResult)

}


exports.createProduct = async(req, res, next) => {

    console.log('creating.. ');
    const product = await Product.create(req.body);
 //    res.json(products)
 
     res.status(200).json({
         success: true,
         data: product 
     })
 
 }

 exports.assignUser = async(req, res, next) => {

    console.log('userid.. ', req.params.productid);

    const updatedProduct = await Product.findByIdAndUpdate(req.params.productid, req.body)

     res.status(204).json({
         success: true 
     })
 
 }
 exports.addReviewToProduct = async(req, res, next) => {

    console.log('userid.. ', req.params.productid);

    const product = await Product.findById(req.params.productid);
    
    console.log(product);

    // change the reviews array
    product.reviews.push(req.body);


    product.save(function (err) {
        if (err) throw err;
        console.log('Success!');
        res.status(200).json({
            success: true
        })
    
      });

    // const review = await product.reviews.create(req.body);

    
 }