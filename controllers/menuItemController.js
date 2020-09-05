var MenuItem = require('../models/MenuItem');

// Display menuitem create form on GET.
exports.create_menuitems = function(req, res) {

    var item = new MenuItem({
        id: 2, //Id is reserved for _id ? 
        name: "pizza",
        price: 1695,
        qty:1,
        restaurant: 'Domino',
        image: "img/2.jpg",
        description: "????"
    })
    
    item.save(function(err) {
        if (err) return handleError(err);
    });

    res.send('A new sample record has been inserted!');
};


exports.get_menuitems = async (req, res) => {
    const allitems = await MenuItem.find();
    res.send(allitems);
    //res.send('NOT IMPLEMENTED: Book create GET');
};
