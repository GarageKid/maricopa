
  
const request =
require('request');


var parcelid = process.argv[2];
var info_name = process.argv[3];

var options = {

url: 'https://api.mcassessor.maricopa.gov/api/parcel/' + parcelid,

headers: {

'x-mc-auth':
'6998bd1a-0567-11e8-a877-00155da2f30b'

},

json: true

};



function 
callback(err, 
res, body) {

if (err) {
return console.log(err); }

console.log(body.PropertyAddress);
}


request(options,
callback);
