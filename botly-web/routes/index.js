var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/badges', function(req, res, next) {
  res.render('wireframe/badges', { title: 'Your Peace Badges' });
});

router.get('/menu', function(req, res, next) {
  res.render('wireframe/menu', { title: 'Express' });
});

router.get('/action', function(req, res, next) {
  res.render('wireframe/action', { title: 'Express' });
});

module.exports = router;
