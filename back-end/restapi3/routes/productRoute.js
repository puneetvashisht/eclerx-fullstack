const express = require('express');
const { getAllProducts, createProduct, assignUser, addReviewToProduct } = require('../controllers/product');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const router = express.Router();


router.route('/products')
.get(getAllProducts)
.post([isAuthenticatedUser, authorizeRoles('admin', 'creator')],createProduct)


router.route(isAuthenticatedUser,'/products/:productid/assign')
.patch(isAuthenticatedUser,assignUser)

router.route('/products/:productid/review')
.post(isAuthenticatedUser,addReviewToProduct)



module.exports = router