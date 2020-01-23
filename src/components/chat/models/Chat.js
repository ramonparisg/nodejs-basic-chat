const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  users: [{ type: Schema.ObjectId, ref: "Users", required: true }]
});

const chatModel = mongoose.model("Chats", chatSchema);

module.exports = chatModel;
