const mongoose=require("mongoose");

const basketSchema = new mongoose.Schema({
    id: {type:String}
});

module.exports = mongoose.model('Basket',basketSchema);