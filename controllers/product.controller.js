const Product = require('../models/product.model');


exports.getAll = async(req,res)=> {
    try{
        const Products = await Product.find();
        console.log(Products);
        res.json(await Product.find());

    } catch(err){
        res.status(500).json(err);
    }
};

exports.postOne = async (req,res)=>{
    try{ 
        const {
            name
        } = req.body;
        const newProduct = new Product({
            name
        });
        await newProduct.save();
        res.json({
            message:'ok'
        });
   } catch(err){
       res.status(500).json(err);
   }
}