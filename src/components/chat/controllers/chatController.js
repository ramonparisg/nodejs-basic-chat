const store = require("../stores/chatStore");

function addChat(chat) {
  return store.add(chat);
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
