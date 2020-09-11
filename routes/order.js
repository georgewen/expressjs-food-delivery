var express = require('express');
var router = express.Router();

var order_controller = require('../controllers/orderController');

router.get('/',order_controller.get_orders);
router.post('/',order_controller.create_Order);
router.get('/:id',order_controller.get_order_byId);
router.patch('/:id',order_controller.update_order);
router.delete('/:id',order_controller.delete_order);

// About page route.
router.get('/create', order_controller.create_Order);
router.get('/user/:username', order_controller.get_orders_byUser);

module.exports = router;