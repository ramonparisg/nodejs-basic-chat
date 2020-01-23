const messageNetwork = require("../components/message/routes/messageNetwork");
const userNetwork = require("../components/user/routes/userNetwork");
const chatNetwork = require("../components/chat/routes/chatNetwork");

const router = function(server) {
  server.use("/message", messageNetwork);
  server.use("/user", userNetwork);
  server.use("/chat", chatNetwork);
};

module.exports = router;
