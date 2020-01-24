const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: "Users"
  },
  chat: {
    type: Schema.ObjectId,
    ref: "Chats"
  },
  message: {
    type: String,
    required: [true, "Message required"]
  },
  date: Date
});

const model = mongoose.model("Messages", messageSchema);

module.exports = model;
