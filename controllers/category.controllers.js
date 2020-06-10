const Category = require('../models/category.model');

exports.getAll = async(req,res)=> {
    try{
        const Category = await Category.find();
        console.log(Category);
        res.json(await Category.find());
    } catch(err){
        res.status(500).json(err);
    }
};

exports.postOne = async (req,res)=>{
    try{
        const { name} = req.body;
        const newCategory = new Category({
            name
        });
        await newCategory.save();
        res.json({message: 'ok'})
    } catch (err){
        res.status(500).json(err);
    }

}