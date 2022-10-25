const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');
let productController=require('../controller/products');

const router = express.Router();

router.get('/contact',(req,res,next)=>{
    res.render("contact", {
        pageTitle: "Contact-US",
        path: "/contact",
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true,
      });
});

module.exports = router;
