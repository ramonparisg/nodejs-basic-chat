const express = require("express");
const app = express();
const router = express.Router();

app.use(router);

router.get("/hello-world", function(req, res) {
  res.send("Hola mundo desde get");
});

router.post("/hello-world", function(req, res) {
  res.send("Hola mundo desde post");
});

router.put("/hello-world", function(req, res) {
  res.send("Hola mundo desde put");
});

router.patch("/hello-world", function(req, res) {
  res.send("Hola mundo desde patch");
});

router.delete("/hello-world", function(req, res) {
  res.send("Hola mundo desde delete");
});

app.listen(3000);
console.log("The app is running at port http://localhost:3000");
