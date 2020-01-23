const store = require("../stores/userStore");

function addUser(user) {
  return new Promise((resolve, reject) => {
    store
      .add(user)
      .then(data => {
        resolve(data);
      })
      .catch(e => {
        reject(e);
      });
  });
}

function listUsers() {
  return new Promise(async resolve => {
    const list = await store.list();
    resolve(list);
  });
}

module.exports = {
  addUser,
  listUsers
};
