const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.routes.js');
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))


// routes
app.use('/api/products', productRoute)


app.get('/', (request, response) => {
    response.send("hello from node api ");
});




// app.get('/api/products', async(request,response)=>{
//     try{
//        const products=  await Product.find({});
//        response.status(200).json(products);
//     }
//     catch(error){
//         response.status(500).json({message : error.message})
//     }
// })

// app.get('/api/products/:id', async (request , response)=>{
//     try{
//        const {id} = request.params;
//        const product = await Product.findById(id);
//        response.status(200).json(product);
//     }
//     catch(error){
//         response.status(500).json({message : error.message})
//     }
// });

// app.post('/api/products', async (request,response)=>{
//     try{
//         const product =await Product.create(request.body);
//         response.status(200).json(product)
//     }
//     catch(error){
//        response.status(500).json({message : error.message});
//     }
// });


// //update a product
// app.put('/api/products/:id', async(request,response)=>{
//     try{
//         const {id} = request.params; 
//         const product = await Product.findByIdAndUpdate(id, request.body);
//         if(!product){
//             response.status(400).json("product not found");
//         }
//         else{
//             const updatedProduct = await Product.findById(id);

//             response.status(200).json(updatedProduct);
//         }
//     }
//     catch(error){
//         response.status(500).json({message: error.message})
//     }
// })

// // delete a product
// app.delete('/api/products/:id', async(request,response)=>{
//     try{
//         const {id} = request.params; 
//         const product = await Product.findByIdAndDelete(id);
//         if(!product){
//             response.status(400).json("product not found");
//         }
//         else{
//             response.status(200).json({message: 'product deleted'})
//         }
//     }
//     catch(error){
//         response.status(500).json({message: error.message})
//     }
// });

mongoose.connect("mongodb+srv://Soham:Nodeapi@atlascluster.fofdjmn.mongodb.net/Node-API?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected to database");
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((error) => {
        console.error('Connection failed', error);
    });
