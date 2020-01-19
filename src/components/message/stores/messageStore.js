const list = [];

const add = fullMessage => {
  list.push(fullMessage);
};

const findAll = () => {
  return list;
};

module.exports = {
  add,
  findAll: findAll
};
