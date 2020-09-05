const mongoose = require("mongoose")

var Schema = mongoose.Schema;

const menuitem_Schema = new Schema({
  id: String,
  name: String,
  price: Number,
  qty: Number,
  restaurant: String,
  image: String,
  description: String,
})

module.exports = mongoose.model("MenuItem", menuitem_Schema)
