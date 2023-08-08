const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/goals", require("./routes/goalRoutes"));

app.use(errorHandler); // overwrite default Express error handler

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`.yellow.bold);
});