let express = require('express');
let bodyParser = require('body-parser');
let Post = require('./models/post');

let app = express();
app.use(bodyParser.json());

app.get('/api/posts', (req, res) => {
	res.json([
		{
			username: 'dickeyxxx',
			body: 'NodeJS wymiata!'
		}
	]);
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