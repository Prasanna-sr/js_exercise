/* Promise */
const rp = require('request-promise');

rp('http://www.google.com')
.then(function (htmlString) {
    console.log(htmlString);
})
.catch(function (err) {
  console.log(err);
});




// convert callback to promise

// function makeRequest(callback) {
// 	const request = require('request');
// 	request('http://google.com', function(error, response, body) {
// 		if (!error) {
// 			callback(null, body);
// 		} else {
// 			callback(error);
// 		}
// 	});	
// }

// var requestPromise = require('util').promisify(makeRequest);

// requestPromise().then(function (htmlString) {
//     console.log(htmlString);
// })
// .catch(function (err) {
//   console.log(err);
// });