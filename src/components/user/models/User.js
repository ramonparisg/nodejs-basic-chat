const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema({
  name: {
    type: String,
    required: [true, "User name required"]
  }
});

const model = mongoose.model("Users", messageSchema);

module.exports = model;
