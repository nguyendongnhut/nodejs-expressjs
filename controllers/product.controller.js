// const db = require("../db");

let fetch = require("node-fetch");

// const Bluebird = require("bluebird");

// fetch.Promise = Bluebird;

module.exports.viewProducts = function (req, res) {
  // n = số trang
  // x = số lượng phần tử trong trang
  // start = (n - 1) * x;
  // end = n * x;

  const page = parseInt(req.query.page) || 1;
  const perPage = 8;

  const start = (page - 1) * perPage;
  const end = page * perPage;

  // const allProduct = db.get("products").value().length;
  // const allPage = Math.ceil(allProduct / 8);

  // var n = 1;

  // if (page <= allPage) {
  //   res.render("products/index", {
  //     products: db.get("products").value().slice(start, end),
  //     page: allPage,
  //     n: n,
  //     location: page,
  //   });
  // } else {
  //   res.redirect("/products");
  // }

  fetch("http://localhost:3001/api/products", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    // body: "{}",
  })
    .then(async (response) => {
      data = await response.json();

      const allProduct = data.length;
      const allPage = Math.ceil(allProduct / 8);

      var n = 1;

      if (page <= allPage) {
        res.render("products/index", {
          products: data.slice(start, end),
          page: allPage,
          n: n,
          location: page,
        });
      } else {
        res.redirect("/products");
      }

      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
