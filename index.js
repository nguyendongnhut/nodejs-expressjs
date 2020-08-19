// const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// const lowdbApi = require("lowdb-api");

require("dotenv").config();

const app = express();

// const file = path.join(__dirname, "./db.json");

// const options = {};

const db = require("./db");
const userRoute = require("./routes/user.route");
const authRoute = require("./routes/auth.route");
const cartRoute = require("./routes/cart.route");
const productRoute = require("./routes/product.route");
const authMiddleware = require("./middlewares/auth.middleware");
const cartMiddleware = require("./middlewares/cart.middleware");
const sessionMiddleware = require("./middlewares/session.middleware");

const apiProductRoute = require("./api/routes/product.route");

const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser("jwegfuwegfiwgefwe"));
// app.use(lowdbApi(file, options));
app.use(express.static("public"));

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", function (req, res) {
  res.render("index");
});

app.use(sessionMiddleware);

app.use("/users", authMiddleware.requireAuth, userRoute);

app.use("/auth", authRoute);

app.use("/products", productRoute);

app.use("/cart", cartMiddleware.countCart, cartRoute);

app.use("/api", apiProductRoute);

app.listen(port);
