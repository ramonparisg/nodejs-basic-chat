const express = require("express");
const app = express();
const router = express.Router();

const response = require("./network/response");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

router.get("/hello-world", function(req, res) {
  console.log(req.headers);
  res.header({
    "custom-header": "This is a custom header"
  });
  response.success(req, res, "Lista de datos");
});

router.post("/hello-world", function(req, res) {
  if (req.query.error === "ok") {
    response.error(req, res, ["Simulated error", "simulated error 2"], 201);
  } else {
    response.success(req, res, "Created successfully", 201);
  }
});

router.put("/hello-world", function(req, res) {
  response.success(req, res, "Updated successfully", 201);
});

router.patch("/hello-world", function(req, res) {
  response.success(req, res, "Patched successfully", 201);
});

router.delete("/hello-world", function(req, res) {
  response.success(req, res, "Deleted successfully");
});

app.use("/app", express.static("public"));

app.listen(3000, () => {
  console.log("The app is running at port http://localhost:3000 🚀");
});
