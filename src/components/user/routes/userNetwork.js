const express = require("express");
const controller = require("../controllers/userController");
const response = require("../../../network/response");

const router = express.Router();

router.get("/", function(req, res) {
  controller.listUsers().then(data => {
    response.success(req, res, data);
  });
});

router.post("/", function(req, res) {
  controller
    .addUser(req.body)
    .then(data => {
      response.success(req, res, data);
    })
    .catch(e => {
      response.error(req, res, e);
    });
});

module.exports = router;
