var Order = require('../models/Order');

exports.get_orders = async (req, res) => {
    const allitems = await Order.find();
    //res.send(allitems);
    
    res.json({"data":allitems})

    //res.send('NOT IMPLEMENTED: Book create GET');
};

exports.get_order_byId = async (req, res) => {
    try {
        const order = await Order.findOne({ _id: req.params.id })
        
        //res.send(order)
        res.json({"data": order})

      } catch {
        res.status(404)
        res.send({ error: "Order doesn't exist!" })
      }
};

exports.get_orders_byUser = async (req, res) => {
  console.log(req.params.username);
  try {
      const orders = await Order.find({ "username": req.params.username });
      //res.send(orders)
      res.json({"data": orders})

    } catch {
      res.status(404)
      res.send({ error: "Order doesn't exist!" })
    }
};

exports.create_Order = function(req, res) {

    var order = new Order({
        //OrderNumber:1, 
        orderdate: '2020-07-01', 
        subtotal: 5924, 
        status: 'Processing',
        username: 'george', 
        orderlines: [
            {id:'5f537119cc1b8b84abe2d184',name: "english breakfast",restaurant: 'Macdonald',qty:1, price: 12.34}, //has to use reference id::...
            {id:'5f53770031f8438b0b02f2dc',name: "pizza",restaurant: 'Domino',qty:2,price:23.45}
        ] 
    })
    
    order.save(function(err) {
        if (err) return handleError(err);
    });

    //res.send('A new sample order has been inserted!');
    res.json({"data": order})
};



exports.update_order = async (req, res) => {
    try {
        const order = await Order.findOne({ _id: req.params.id })
    
        if (req.body.orderdate) {
          order.orderdate = req.body.orderdate
        }
    
        if (req.body.Status) {
          order.status = req.body.status
        }
    
        await order.save()
        
        //res.send(order)
        res.json({"data": order})
      } catch {
        res.status(404)
        res.send({ error: "order doesn't exist!" })
      }

};

exports.delete_order = async (req, res) => {
    try {
        await Order.deleteOne({ ordernumber: req.params.id })
        res.status(204).send()
      } catch {
        res.status(404)
        res.send({ error: "Post doesn't exist!" })
      }
};