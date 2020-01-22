const store = require("../stores/messageStore");

const addMessage = (user, message) => {
  return new Promise((resolve, reject) => {
    const fullMessage = {
      user: user,
      message: message,
      date: new Date()
    };

    store
      .add(fullMessage)
      .then(() => {
        resolve(fullMessage);
      })
      .catch(error => {
        reject(error._message);
      });
  });
};

const findAllMessages = () => {
  return new Promise(resolve => {
    resolve(store.findAll());
  });
};

const updateMessage = (id, message) => {
  return new Promise((resolve, reject) => {
    store
      .update(id, message)
      .then(result => {
        resolve(result);
      })
      .catch(e => {
        reject(e);
      });
  });
};

module.exports = {
  addMessage,
  findAllMessages,
  updateMessage
};
