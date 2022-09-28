const path = require('path');

const express = require('express');
// const contactcontroller=require('../controller/admin');
const rootDir = require('../util/path');

const router = express.Router();

// /admin/contact-us => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});



// /admin/contact-us => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});
// router.get('/contact-us', contactcontroller.getcontact);



// /admin/contact-us => POST
// router.post('/contact-us', contactcontroller.postcontact);
// /admin/contact-us => GET
router.get('/contact-us', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
});



// /admin/contact-us => POST
router.post('/contact-us', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
