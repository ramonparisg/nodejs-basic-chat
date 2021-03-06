const express = require("express");

const response = require("../../../network/response");
const controller = require("../controllers/messageController");
const HttpStatus = require("http-status-codes");
const uploader = require("../../../utils/uploader");

const router = express.Router();

const upload = uploader("public/files/");

router.get("/", function(req, res) {
  controller
    .findAllMessages(req.query.user, req.query.chat)
    .then(data => {
      response.success(req, res, data, HttpStatus.OK);
    })
    .catch(e => response.error(req, res, e));
});

router.post("/", upload.single("file"), function(req, res) {
  const { body } = req;
  controller
    .addMessage(body.user, body.message, body.chat, req.file)
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

router.patch("/:id", function(req, res) {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then(data => {
      response.success(req, res, data);
    })
    .catch(e => {
      response.error(req, res, e);
    });
});

router.delete("/:id", function(req, res) {
  controller
    .removeMessage(req.params.id)
    .then(data => {
      response.success(req, res, data);
    })
    .catch(e => {
      response.error(req, res, e);
    });
});

module.exports = router;
