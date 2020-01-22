const db = require("mongoose");
const Model = require("../models/Message");

db.Promise = global.Promise;
db.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("[db] DB connected successfully"));

const add = fullMessage => {
  const myMessage = new Model(fullMessage);
  return myMessage.save();
};

const findAll = async () => {
  return await Model.find();
};

const update = async (id, message) => {
  const documentMessage = await Model.findById(id);
  documentMessage.message = message;
  return await documentMessage.save();
};

module.exports = {
  add,
  findAll: findAll,
  update
};
