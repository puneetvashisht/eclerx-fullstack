const express = require('express');
const { getAllProducts, createProduct, assignUser, addReviewToProduct } = require('../controllers/product');
const router = express.Router();


router.route('/products')
.get(getAllProducts)
.post(createProduct)


router.route('/products/:productid/assign')
.patch(assignUser)

router.route('/products/:productid/review')
.post(addReviewToProduct)



module.exports = router