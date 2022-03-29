const express = require('express');
const { getAllProducts, createProduct, assignUser, addReviewToProduct } = require('../controllers/product');
const advancedQuery = require('../middleware/advanced-query');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const product = require('../models/product');
const router = express.Router();


router.route('/')
.get(advancedQuery(product), getAllProducts)
.post([isAuthenticatedUser, authorizeRoles('admin', 'creator')],createProduct)


router.route(isAuthenticatedUser,'/:productid/assign')
.patch(isAuthenticatedUser,assignUser)

router.route('/:productid/review')
.post(isAuthenticatedUser,addReviewToProduct)



module.exports = router