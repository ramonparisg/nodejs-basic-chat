const store = require("../stores/chatStore");

function addChat(chat) {
  return new Promise((resolve, reject) => {
    store
      .add(chat)
      .then(data => resolve(data))
      .catch(e => reject(e));
  });
}

function listChats() {
  return new Promise((resolve, reject) => {
    store
      .list()
      .then(data => resolve(data))
      .catch(e => reject(e));
  });
}

module.exports = {
  addChat,
  listChats
};
