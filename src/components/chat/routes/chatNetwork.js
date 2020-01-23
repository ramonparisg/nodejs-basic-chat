const express = require("express");
const router = express.Router();
const controller = require("../controllers/chatController");
const response = require("../../../network/response");
const HttpStatus = require("http-status-codes");

router.get("/", (req, res) => {
  controller
    .listChats()
    .then(data => {
      response.success(req, res, data);
    })
    .catch(e => {
      response.error(req, res, e);
    });
});

router.post("/", (req, res) => {
  controller
    .addChat(req.body)
    .then(data => {
      response.success(req, res, data, HttpStatus.CREATED);
    })
    .catch(e => {
      response.error(req, res, e);
    });
});

module.exports = router;
