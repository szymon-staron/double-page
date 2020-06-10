const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  image: { type: String },
  price: { type: Number },
  oldPrice: { type: Number },
  promotion: { type: String },
  recommended: { type: String },
  news: { type: String },
});

module.exports = mongoose.model("Product", productSchema);
