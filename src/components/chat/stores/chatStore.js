const Model = require("../models/Chat");

function addChat(chat) {
  const chatModel = new Model(chat);
  return chatModel.save();
}

function listChats() {
  return new Promise((resolve, reject) => {
    Model.find()
      .populate("users")
      .exec((err, data) => {
        if (err) {
          reject(err);
          return false;
        }
        resolve(data);
      });
  });
}

module.exports = {
  add: addChat,
  list: listChats
};
