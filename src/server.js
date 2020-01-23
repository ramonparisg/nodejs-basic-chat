require("dotenv").config();
const express = require("express");
const router = require("./network/routes");
const connectDB = require("./db");

connectDB();

const app = express();

app.use("/app", express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router(app);

app.listen(3000, () => {
  console.log("The app is running at port http://localhost:3000 🚀");
});
