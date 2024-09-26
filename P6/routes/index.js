var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', (req, res) => {
  res.render('index.ejs');
 });

router.get('/about', (req, res) => {
  res.render('about.ejs');
 });

router.get('/post', (req, res) => {
  res.render('post.ejs');
 });

router.get('/contact', (req, res) => {
  res.render('contact.ejs');
 });

module.exports = router;
