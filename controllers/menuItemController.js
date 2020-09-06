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
    // var allitems = [
    //     {
    //         Id: 1,
    //         name: "english breakfast",
    //         price: 12.34,
    //         qty:1,
    //         restaurant: 'Macdonald',
    //         image: "img/1.jpg",
    //         //image: "http://via.placeholder.com/400x300",
    //         description: "???"
    //     },
    //     {
    //         Id: 2,
    //         name: "pizza",
    //         price: 16.95,
    //         qty:1,
    //         restaurant: 'Domino',
    //         image: "img/2.jpg",
    //         //image: "http://via.placeholder.com/400x300",
    //         description: "????"
    //     },
    //     {
    //         Id: 3,
    //         name: "hamburger",
    //         price: 15.45,
    //         qty:1,
    //         restaurant: 'Macdonald',
    //         image: "img/3.jpg",
    //         //image: "http://via.placeholder.com/400x300",
    //         description: "????"
    //     },
    //     {
    //         Id: 4,
    //         name: "Hash Brown",
    //         price: 5.45,
    //         qty:1,
    //         restaurant: 'Macdonald',
    //         image: "img/10.jpeg",
    //         //image: "http://via.placeholder.com/400x300",
    //         description: "????"
    //     },
    //     {
    //         Id: 5,
    //         name: "Special Beef Noodle",
    //         price: 12.95,
    //         qty:1,
    //         restaurant: 'Ms Pho',
    //         image: "img/20.jpeg",
    //         //image: "http://via.placeholder.com/400x300",
    //         description: "????"
    //     },
    //     {
    //         Id: 6,
    //         name: "Rice Roll",
    //         price: 11.45,
    //         qty:1,
    //         restaurant: 'Ms Pho',
    //         image: "img/21.jpeg",
    //         //image: "http://via.placeholder.com/400x300",
    //         description: "????"
    //     },
    //     {
    //         Id: 7,
    //         name: "Chicken Noodle",
    //         price: 13.45,
    //         qty:1,
    //         restaurant: 'Ms Pho',
    //         image: "img/22.jpeg",
    //         //image: "http://via.placeholder.com/400x300",
    //         description: "????"
    //     },                                                
    //     {
    //         Id: 8,
    //         name: "Crispy Chicken Rice",
    //         price: 14.45,
    //         qty:1,
    //         restaurant: 'Ms Pho',
    //         image: "img/23.jpeg",
    //         //image: "http://via.placeholder.com/400x300",
    //         description: "????"
    //     },                
    // ]   ;

    res.send(allitems);
    //res.send('NOT IMPLEMENTED: Book create GET');
};


exports.get_menuitem_byId = async (req, res) => {
    try {
        const item = await MenuItem.findOne({ _id: req.params.id })
        res.send(item)
      } catch {
        res.status(404)
        res.send({ error: "Order doesn't exist!" })
      }
};
