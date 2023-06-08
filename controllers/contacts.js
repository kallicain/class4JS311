const contacts = require("../data/contacts");

const getContact = function(req, res){
  res.json(contacts);
}

const postContact = function(req, res){
  res.json(contacts);
}

const contactId = function(req, res){
  let id = req.params.id;
  let findId = contacts.find(function(element){
    if(element.id == id) {
      return true;
    } else {
      return false;
    }
  })
  res.json(findId);
}


module.exports = {
  getContact, postContact, contactId
}