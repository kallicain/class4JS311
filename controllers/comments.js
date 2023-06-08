const comments = require("../data/comments");

let postComment = function(req, res){
  res.json(comments);
}

let getComment = function(req, res){
  res.json(comments);
}

let getId = function(req, res){
  let id = req.params.id;
  let findId = comments.find(function(element){
    if(element.id == id) {
      return true;
    } else {
      return false;
    }
  })
  res.json(findId);
}

module.exports = {
  getId, postComment, getComment
}