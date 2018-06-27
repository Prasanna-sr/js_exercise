const request = require('request');

request('http://google.com', function(error, response, body) {
	if (!error) {
		console.log(body);
	}
});

