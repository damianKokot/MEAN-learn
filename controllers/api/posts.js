const Post = require('../../models/post');
const router = require('express').Router();
const websockets = require('../../websockets');

router.get('/', (req, res, next) => {
	Post.find()
	.sort('-date')
	.exec((err, posts)=>{
		if(err) { return  next(err) }
		res.json(posts)
	})
});
router.post('/', (req, res, next) => {
	const post = new Post({body: req.body.body});
	post.username = req.auth.username;
	post.save(function (err, post){
		if (err) { return next(err) }
		websockets.broadcast('new_post', post)
		res.json(201, post);
	})
});	

module.exports = router;
