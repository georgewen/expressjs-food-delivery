const mongoose = require("mongoose")

var Schema = mongoose.Schema;

const menuitem_Schema = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  price: Number,
  qty: Number,
  restaurant: String,
  image: String,
  description: String,
})

module.exports = mongoose.model("MenuItem", menuitem_Schema)
