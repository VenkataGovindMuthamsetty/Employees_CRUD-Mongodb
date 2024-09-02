const express = require("express");
const dotEnv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

dotEnv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((error) => {
    console.log("Error", error);
  });

app.use("/employees", employeeRoutes);

app.listen(PORT, () => {
  console.log("started succesfully");
});
