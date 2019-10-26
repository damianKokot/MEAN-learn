let express = require('express');
let bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());
app.use('/', require('./controllers/static'));
app.use('/api/posts', require('./controllers/api/posts'));

app.listen(3000, function () {
	console.log('Server is listening on: ', 3000);
});