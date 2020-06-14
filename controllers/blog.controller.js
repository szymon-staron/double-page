const Blog  =require('../models/blog.model');


exports.getAll =async(req,res)=>{
    try{
        const Blogs = await Blog.find();
        console.log(Blogs);
        res.json(await Blog.find());

    } catch(err){
        res.status(500).json(err);
    }
};

exports.postOne = async(req,res) =>{
    try{
        const{
            title,description,image
        }= req.body;
        const newBlog = new Blog({
            title,description,image
        });
        await newBlog.save();
        res.json({
            message:'ok'
        });
    } catch(err) {
        res.status(500).json(err);
    }
}