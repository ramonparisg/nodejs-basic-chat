const store = require("../stores/messageStore");

const addMessage = (user, message, chat, file) => {
  return new Promise((resolve, reject) => {
    let fileUrl = "";
    if (file) {
      fileUrl = process.env.PATH_TO_UPLOAD + file.filename;
    }

    const fullMessage = {
      user: user,
      message: message,
      date: new Date(),
      chat: chat,
      file: fileUrl
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

const findAllMessages = (user, chat) => {
  return new Promise((resolve, reject) => {
    store
      .findAll(user, chat)
      .then(data => resolve(data))
      .catch(e => reject(e));
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

const removeMessage = id => {
  return new Promise((resolve, reject) => {
    store
      .remove(id)
      .then(data => {
        resolve(data);
      })
      .catch(e => {
        reject(e);
      });
  });
};

module.exports = {
  addMessage,
  findAllMessages,
  updateMessage,
  removeMessage
};
