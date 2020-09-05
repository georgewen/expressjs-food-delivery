var express = require('express');
var router = express.Router();

var menuitem_controller = require('../controllers/menuItemController');

// Home page route.
// router.get('/', function (req, res) {
//   res.send('menuitem home page');
// })

router.get('/',menuitem_controller.get_menuitems);

// About page route.
router.get('/create', menuitem_controller.create_menuitems);


module.exports = router;