const messageNetwork = require("../components/message/routes/messageNetwork");
const userNetwork = require("../components/user/routes/userNetwork");

const router = function(server) {
  server.use("/message", messageNetwork);
  server.use("/user", userNetwork);
};

module.exports = router;
