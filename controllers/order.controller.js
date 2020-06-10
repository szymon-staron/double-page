const Order = require('../models/order.model');

exports.getAll = async(req,res)=> {
    try{
        const Orders = await Order.find();
        console.log(Orders);
        res.json(await Order.find());
    } catch(err){
        res.status(500).json(err);
    }
};


exports.postOne =async(req,res)=>{
    try{
        const {
            name,surname,price,street,postCode,homeNumber,telephone
        } = req.body;
        const newOrder = new Order({
            name,surname,price,street,postCode,homeNumber,telephone
        });
        await newOrder.save();
        res.json({
            message:'ok'
        });
    } catch(err){
        res.status(500).json(err);
    }
}