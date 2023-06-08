const vehicles = require("../data/vehicles");

const getVehicle = function(req, res){
  res.json(vehicles);
};

const postVehicle = function(req, res){
  res.json(vehicles);
};

const vehicleId = function(req, res){
  let id = req.params.id;
  let findId = vehicles.find(function(id){
    if(id == vehicles_id) {
      return `${vehicles_id}`;
    } else {
      return false;
    }
  })
  res.json(findId);
};

module.exports = {
  getVehicle, postVehicle, vehicleId
}