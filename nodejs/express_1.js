const express = require('express');

const app = express();

app.get('/', function(req, res) {
	res.status(200).send('hello world');
});

const port = 3000;
app.listen(port, function() {
	console.log('server running at port ' + port);
});