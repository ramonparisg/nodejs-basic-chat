const messageNetwork = require("../components/message/routes/messageNetwork");

const router = function(server) {
  server.use("/message", messageNetwork);
};

module.exports = router;
