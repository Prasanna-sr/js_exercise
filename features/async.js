/* async function */
 
const rp = require('request-promise');

function makeGoogleRequest() {
	return rp('http://www.google.com');
}

async function asyncCall() {  
  var result = await makeGoogleRequest();
  console.log(result);
}


asyncCall();