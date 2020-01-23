const db = require("mongoose");

db.Promise = global.Promise;

function connect() {
  db.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => console.log("[db] DB connected successfully"));
}

module.exports = connect;
