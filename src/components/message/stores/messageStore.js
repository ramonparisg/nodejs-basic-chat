const db = require("mongoose");
const Model = require("../models/Message");

const add = fullMessage => {
  const myMessage = new Model(fullMessage);
  return myMessage.save();
};

const findAll = async user => {
  let userFilter = {};
  if (user) {
    userFilter.user = new RegExp(user, "i");
  }
  return await Model.find(userFilter);
};

const update = async (id, message) => {
  const documentMessage = await Model.findById(id);
  documentMessage.message = message;
  return await documentMessage.save();
};

const remove = async id => {
  return await Model.findByIdAndDelete(id);
};

module.exports = {
  add,
  findAll: findAll,
  update,
  remove
};
