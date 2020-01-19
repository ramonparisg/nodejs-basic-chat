const store = require("../stores/messageStore");

const addMessage = (user, message) => {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.log("[messageController] Missing values");
      reject("Missing parameters");
      return false;
    }

    const fullMessage = {
      user: user,
      message: message,
      date: new Date()
    };

    store.add(fullMessage);
    resolve(fullMessage);
  });
};

const findAllMessages = () => {
  return new Promise(resolve => {
    resolve(store.findAll());
  });
};

module.exports = {
  addMessage,
  findAllMessages
};
