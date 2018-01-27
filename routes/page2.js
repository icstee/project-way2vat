var express = require('express');
var router = express.Router();

/* GET page2 page. */
router.get('/', function(req, res, next) {
    res.render('page2', { title: 'Next 15' });
});

module.exports = router;