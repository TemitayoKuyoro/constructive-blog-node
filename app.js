const express = require("express");

const feedRoutes = require("./routes/post");

const mongoose = require("mongoose");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/", feedRoutes);

mongoose
  .connect(
    "mongodb+srv://tayo28kuyoro:YaiMWk31cssO06Et@cluster0.bsvcyyj.mongodb.net/news?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log(result);
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
