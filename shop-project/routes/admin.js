const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();
let productController=require('../controller/products');


// /admin/add-product => GET
router.get("/add-product",productController.getAddProduct);

// /admin/add-product => POST
router.post("/add-product", productController.postAddProduct );

module.exports= router;


// or

// module.exports = { routes: router, products: products };
