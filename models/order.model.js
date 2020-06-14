const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema ({
    name: {type: String},
    surname: {type:String},
    telephone: {type:Number},
    postCode: {type:String},
    street:{type:String},
    homeNumber:{type:String},
    price:{type:String},

})
module.exports=mongoose.model('Order', orderSchema);