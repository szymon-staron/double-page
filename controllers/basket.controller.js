const Basket = require('../models/basket.model');


exports.getAll = async(req,res)=>{
    try{
        const Baskets = await Basket.find();
        console.log(Basket);
        res.json(await Basket.find());
    } catch(err){
        res.status(500).json(err);
    }
};

exports.postOne = async(req,res)=> {
    try{
        const {
         id
        } = req.body;
        const newBasket = new Basket({
            id
        });
        await newBasket.save();
        res.json({
            message:'ok'
        });

    } catch(err){
        res.status(500).json(err);
    }
}