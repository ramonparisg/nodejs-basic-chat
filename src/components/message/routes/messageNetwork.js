const express = require("express");
const router = express.Router();
const response = require("../../../network/response");

router.get("/", function(req, res) {
  response.success(req, res, "Lista de datos");
});

router.post("/", function(req, res) {
  if (req.query.error === "ok") {
    response.error(req, res, ["Simulated error", "simulated error 2"], 201);
  } else {
    response.success(req, res, "Created successfully", 201);
  }
});

module.exports = router;
