const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderDetailSchema = new Schema({
  product_id:Number,
  price:Number,
  qty:Number
});

module.exports = mongoose.model("OrderDetail", orderDetailSchema);
