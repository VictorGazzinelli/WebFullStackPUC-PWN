const express = require('express');
const router = express.Router();
const Products = require('../store/Products');
const Comment = require('../store/Comment');

/* GET home page. */
router.get('/', function(_, res) {
  Products.get()
    .then(function(products) {      
      res.render('index', { products });
    })
});

router.get('/:id', function(req, res) {
    console.log('id', req.params.id)
    let productId = +req.params.id;
    if(productId && !isNaN(productId)){
          Products.getWhere(productId)
            .then((products) => {
              let product = products[0];
              res.render('product', { product })
              // Comment.find({productId: productId})
              //     .then( (comments) => {
              //       if(comments && product){
              //         res.render('product', { product, comments })
              //       }
              //       else{
              //         throw new Error(`Could not find comment and product related to :${req.params}`)
              //       }
              //     })
            })
            .catch((error) => console.error(error))
    }
    else{
        throw new Error(`Invalid id :${req.params.id}`)
    }
});

module.exports = router;
