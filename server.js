let express = require('express');
let bodyParser = require('body-parser');

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

app.listen(3000, () => {
	console.log("Server is listening on port: " + 3000);
});