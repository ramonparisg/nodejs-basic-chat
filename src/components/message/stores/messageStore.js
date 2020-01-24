const Model = require("../models/Message");

const add = fullMessage => {
  const myMessage = new Model(fullMessage);
  return myMessage.save();
};

const findAll = (user, chat) => {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (user) {
      filter.user = user;
    }

    if (chat) {
      filter.chat = chat;
    }

    Model.find(filter)
      .populate("user")
      .populate({
        path: "chat",
        populate: {
          path: "users"
        }
      })
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
  return documentMessage.save();
};

const remove = id => {
  return Model.findByIdAndDelete(id);
};

module.exports = {
  add,
  findAll: findAll,
  update,
  remove
};
