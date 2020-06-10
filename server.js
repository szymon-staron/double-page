const express =require("express");
const cors = require("cors");
const path = require("path");
const connectToDB = require('./db/db');


// import routes
const productRoutes = require('./routers/product.routes')
const categoryRoutes =require('./routers/category.routes')
const blogRoutes = require('./routers/blog.routes');
const orderRoutes = require('./routers/order.routes');


// import dataBase
connectToDB();

const app = express();




app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.static(path.join(__dirname,"/client/build")));

app.use("/api",productRoutes);
app.use("/api",categoryRoutes);
app.use("/api",blogRoutes);
app.use('/api',orderRoutes);
app.use('/api/auth',require('./routers/auth.routes.js'));

app.get("*",(req, res)=>{
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
});
app.listen(process.env.PORT || 8000, () =>{
    console.log("Server is running...");
})
app.use((req,res)=>{
    res.status(404).send({message:"Not found ...."})
});