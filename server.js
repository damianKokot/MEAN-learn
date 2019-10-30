const express = require('express');
const bodyParser = require('body-parser');
const ws = require('./websockets');

let app = express();
app.use(bodyParser.json());
app.use(require('./auth'));
app.use('/', require('./controllers/static'));
app.use('/api/posts', require('./controllers/api/posts'));
app.use('/api/sessions', require('./controllers/api/sessions'));
app.use('/api/users', require('./controllers/api/users'));


const server = app.listen(3000, function () {
	console.log('Server is listening on: ', 3000);
});
ws.connect(server);