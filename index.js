const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const db = require("./db");
const userRoute = require("./routes/user.route");
const loginRoute = require("./routes/login.route");

const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", function (req, res) {
  res.render("index");
});

app.use("/users", userRoute);

app.use("/login", loginRoute);

app.listen(port);
