const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  subTotalPrice: Number,
  shipping: Number,
  totalPrice: Number,
  user_id: Number,
  orderDate: Date
});

module.exports = mongoose.model("User", userSchema);
