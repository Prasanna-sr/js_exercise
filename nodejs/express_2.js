var request = require('request');
const express = require('express');

const app = express();

app.get('/request', function(req, res) {
	request('http://google.com', function(error, response, body) {
		res.status(200).send(body);
    });
});

const port = 3000;
app.listen(port, function() {
	console.log('server running at port ' + port);
});