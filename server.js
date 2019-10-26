let express = require('express');
let bodyParser = require('body-parser');
let Post = require('./models/post');

let app = express();
app.use(bodyParser.json());

app.get('/', (req,res) => {
	res.sendfile('layouts/posts.html');
});
app.get('/api/posts', (req, res, next) => {
	Post.find()
	.sort('-date')
	.exec((err, posts) => {
		if(err) { return next(err); }
		res.json(posts);
	});
});
app.post('/api/posts', (req, res) => {
	let post = new Post({
		username: req.body.username,
		body: req.body.body
	});
	post.save(function (err, post){
		if (err) { return next(err) }
		res.json(201, post);
	});
});

app.listen(3000, () => {
	console.log("Server is listening on port: " + 3000);
});