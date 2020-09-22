// const path = require("path");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
// const lowdbApi = require("lowdb-api");

const jwt = require("jsonwebtoken");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(fileUpload());
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
const apiUserRoute = require("./api/routes/user.route");
const apiCategoryRoute = require("./api/routes/category.route");
const apiPublisherRoute = require("./api/routes/publisher.route");
const apiAuthRoute = require("./api/routes/auth.route");
const apiAuthMiddleware = require("./api/middlewares/checkToken.middleware");
const apiGetImage = require("./api/routes/image.route");
const apiCartRoute = require("./api/routes/cart.route");

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

//
app.use("/users", authMiddleware.requireAuth, userRoute);
// app.use("/users", userRoute);
app.use("/auth", authRoute);
app.use("/products", productRoute);
app.use("/cart", cartMiddleware.countCart, cartRoute);

// API route
// app.use("/api/products", apiAuthMiddleware.checkToken, apiProductRoute);
app.use("/api/products", apiProductRoute);
app.use("/api/image", apiGetImage);
app.use("/api/users", apiUserRoute);
app.use("/api/categorys", apiCategoryRoute);
app.use("/api/publishers", apiPublisherRoute);
app.use("/api/auth", apiAuthRoute);
app.use("/api/cart", apiCartRoute);

app.listen(port);
