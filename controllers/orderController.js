var Order = require('../models/Order');

exports.get_orders = async (req, res) => {
    const allitems = await Order.find();
    res.send(allitems);
    //res.send('NOT IMPLEMENTED: Book create GET');
};

exports.get_order_byId = async (req, res) => {
    try {
        const order = await Order.findOne({ _id: req.params.id })
        res.send(order)
      } catch {
        res.status(404)
        res.send({ error: "Order doesn't exist!" })
      }
};


exports.create_Order = function(req, res) {

    var order = new Order({
        OrderNumber:1, 
        OrderDate: '2020-07-01', 
        SubTotal: 5924, 
        Status: 'Processing',
        UserName: 'george', 
        OrderLines: [
            {menuId:'5f537119cc1b8b84abe2d184',name: "english breakfast",restaurant: 'Macdonald',qty:1, price: 12.34}, //has to use reference id::...
            {menuId:'5f53770031f8438b0b02f2dc',name: "pizza",restaurant: 'Domino',qty:2,price:23.45}
        ] 
    })
    
    order.save(function(err) {
        if (err) return handleError(err);
    });

    res.send('A new sample order has been inserted!');
};



exports.update_order = async (req, res) => {
    try {
        const order = await Order.findOne({ _id: req.params.id })
    
        if (req.body.OrderDate) {
          order.OrderDate = req.body.OrderDate
        }
    
        if (req.body.Status) {
          order.status = req.body.status
        }
    
        await order.save()
        res.send(order)
      } catch {
        res.status(404)
        res.send({ error: "order doesn't exist!" })
      }

};

exports.delete_order = async (req, res) => {
    try {
        await Order.deleteOne({ _id: req.params.id })
        res.status(204).send()
      } catch {
        res.status(404)
        res.send({ error: "Post doesn't exist!" })
      }
};