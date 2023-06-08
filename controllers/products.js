const products = require("../data/products");

const getProducts = function(req, res){
  res.json(products);
};

const postProducts = function(req, res){
 
};

const productId = function(req, res){
  let id = req.params.id;
  let findId = products.find(function(element){
    if(element.id == id) {
      return true;
    } else {
      return false;
    }
  })
  res.json(findId);
};

module.exports = {
  getProducts, postProducts, productId
}