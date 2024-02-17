const Product = require('../models/product.model.js')
const getProducts = async(request, response)=>{
    try{
        const products=  await Product.find({});
        response.status(200).json(products);
     }
     catch(error){
         response.status(500).json({message : error.message})
     }
}

const getProduct = async (request , response)=>{
    try{
       const {id} = request.params;
       const product = await Product.findById(id);
       response.status(200).json(product);
    }
    catch(error){
        response.status(500).json({message : error.message})
    }
}

const createProduct = async (request,response)=>{
    try{
        const product =await Product.create(request.body);
        response.status(200).json(product)
    }
    catch(error){
       response.status(500).json({message : error.message});
    }
}

const updateProduct = async(request,response)=>{
    try{
        const {id} = request.params; 
        const product = await Product.findByIdAndUpdate(id, request.body);
        if(!product){
            response.status(400).json("product not found");
        }
        else{
            const updatedProduct = await Product.findById(id);

            response.status(200).json(updatedProduct);
        }
    }
    catch(error){
        response.status(500).json({message: error.message})
    }
} 

const deleteProduct = async(request,response)=>{
    try{
        const {id} = request.params; 
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            response.status(400).json("product not found");
        }
        else{
            response.status(200).json({message: 'product deleted'})
        }
    }
    catch(error){
        response.status(500).json({message: error.message})
    }
}

module.exports={
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct

}