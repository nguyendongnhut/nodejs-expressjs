const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const db = require("./db");
const userRoute = require("./routes/user.route");
const authRoute = require("./routes/auth.route");
const authMiddleware = require("./middlewares/auth.middleware");

const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", function (req, res) {
  res.render("index");
});

app.use("/users", authMiddleware.requireAuth, userRoute);

app.use("/auth", authRoute);

app.listen(port);
