var express = require('express');
var router = express.Router();
userCtrl = require('../controllers/users')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//router.get('/', userCtrl.all);

router.post('/new', userCtrl.create);

router.get('/:id', userCtrl.show);

router.post('/auth/login', userCtrl.login);





module.exports = router;
