
module.exports = app => {
  const db = require("../models");

  var router = require("express").Router();
  const products = require("../controllers/product.controller.js");

  const multer = require('multer');
  const storage = multer.memoryStorage();
  const upload = multer({ storage: storage });

  router.post('/upload', upload.single('file'), products.upload);


  // Create a new Tutorial
  router.post("/", products.create);

  // Retrieve all products
  router.get("/", products.findAll);

  // Retrieve all published products
  router.get("/published", products.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", products.findOne);

  // Update a Tutorial with id
  router.put("/:id", products.update);

  // Delete a Tutorial with id
  router.delete("/:id", products.delete);

  // Create a new Tutorial
  router.delete("/", products.deleteAll);


  app.use("/api/products", router);
};
