const express = require("express");
const app = express();

app.use('/', (req, res)=>{
    res.send("Hola!")
});

app.listen(3000);
console.log("The app is running at port http://localhost:3000");