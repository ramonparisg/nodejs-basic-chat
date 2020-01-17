const express = require("express");
const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

router.get("/hello-world", function(req, res) {
  console.log(req.headers);
  res.header({
    "custom-header": "This is a custom header"
  });
  res.send({ text: "Hola mundo!" });
});

router.post("/hello-world", function(req, res) {
  console.log(req.query);
  console.log(req.body);
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

app.listen(3000, () => {
  console.log("The app is running at port http://localhost:3000 🚀");
});
