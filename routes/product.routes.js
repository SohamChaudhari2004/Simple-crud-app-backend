const express = require("express");
const Product = require("../models/product.model.js") 
const router = express.Router();
const {getProducts, getProduct, createProduct,updateProduct,deleteProduct} = require('../controllers/product.controller.js')

// router.get('/', async(request, response)=>{
//     try{
//         const products=  await Product.find({});
//         response.status(200).json(products);
//      }
//      catch(error){
//          response.status(500).json({message : error.message})
//      }
// })

router.get('/' , getProducts);
router.get('/:id', getProduct );

router.post('/' ,createProduct )

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);


module.exports = router;