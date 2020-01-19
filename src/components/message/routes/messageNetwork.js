const express = require("express");
const router = express.Router();
const response = require("../../../network/response");
const controller = require("../controllers/messageController");
const HttpStatus = require("http-status-codes");

router.get("/", function(req, res) {
  response.success(req, res, "Lista de datos");
});

router.post("/", function(req, res) {
  const { body } = req;
  controller
    .addMessage(body.user, body.message)
    .then(data => {
      response.success(
        req,
        res,
        { ...data, responseMessage: "Created successfully" },
        HttpStatus.OK
      );
    })
    .catch(error => {
      response.error(req, res, error, HttpStatus.BAD_REQUEST);
    });
});

module.exports = router;
