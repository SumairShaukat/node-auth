const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
const authRoutes = require('./routes/auth.route')
require('./config/mongodb')
require("dotenv").config();
const app = express();
app.use('/auth', authRoutes)

app.use(morgan('dev'))

app.get("/", async (req, res) => {
  res.send("hello from the server");
});

app.use(async (req, res, next) => {
  next(createError.NotFound());
});

app.use(async (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App is Listening on port ${port}`);
});
