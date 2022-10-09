const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  image: String,
  category_id:String,
  price:Number,
  discount:Number,
  rating:Number,
  ratingCount:Number
});

module.exports = mongoose.model("Product", productSchema);
