const router = require('express').Router();
const User = require('../../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const config = require('../../config');

router.post('/', function(req, res, next){
	User.findOne({ username: req.body.username })
		.select('password')
		.exec(function(err, user){
			if(err) { return next(err); }
			if(!user) { return res.send(401); }
			bcrypt.compare(req.body.password, user.password, function(err, valid){
				if(err) { return next(err); }
				if(!valid) { return res.send(401) }
				const token = jwt.encode({ username: req.body.username }, config.secret);
			res.send(token);
			});
		});
});

module.exports = router;