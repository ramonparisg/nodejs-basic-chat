const Model = require("../models/User");

function addUser(user) {
  const modelUser = new Model(user);
  return modelUser.save();
}

function list() {
  return Model.find();
}

module.exports = {
  add: addUser,
  list
};
