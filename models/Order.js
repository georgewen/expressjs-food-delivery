const mongoose = require("mongoose")

var Schema = mongoose.Schema;

const order_Schema = new Schema({
    OrderNumber: Number,
    OrderDate: Date,
    SubTotal: Number,
    Status: String,
    UserName: String,
    OrderLines: [
       {
        Id: Number,//{type: Schema.Types.ObjectId, ref: 'MenuItem', requried: true},
        name: String,
        price: Number,
        qty: Number,
        restaurant: String,
        image: String,
        description: String,
       }
    ]
})

module.exports = mongoose.model("Order", order_Schema)

/*
      {OrderNumber:1, OrderDate: '2020-07-01', SubTotal: 59.24, Status: 'Processing',UserName: 'george', OrderLines: [{id:1,name: "english breakfast",restaurant: 'Macdonald',qty:1, price: 12.34},{id:2,name: "pizza",restaurant: 'Domino',qty:2,price:23.45}] },
*/