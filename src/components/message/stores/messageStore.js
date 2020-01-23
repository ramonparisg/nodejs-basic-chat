const db = require("mongoose");
const Model = require("../models/Message");

const add = fullMessage => {
  const myMessage = new Model(fullMessage);
  return myMessage.save();
};

const findAll = user => {
  return new Promise((resolve, reject) => {
    let userFilter = {};
    if (user) {
      userFilter.user = new RegExp(user, "i");
    }

    Model.find(userFilter)
      .populate("user")
      .exec((err, data) => {
        if (err) {
          reject(err);
          return false;
        }

        resolve(data);
      });
  });
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
