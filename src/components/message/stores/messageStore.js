const db = require("mongoose");
const model = require("../models/Message");

db.Promise = global.Promise;
db.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("[db] DB connected successfully"));

const add = fullMessage => {
  const myMessage = new model(fullMessage);
  myMessage.save();
};

const findAll = async () => {
  return await model.find();
};

module.exports = {
  add,
  findAll: findAll
};
