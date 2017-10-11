var request = require("request");
var download = require("./download");

//
// The params below are posted to the airSpring service.
// You can customize their values and see the generated
// PDF document reflect your changes.
//
var postParams = {
  company: 'airSpring Software',
  email: 'sales@airspringsoftware.com',
  phone: '(859) 309-6347',
  address: '2365 Harrodsburg Rd 2365 Harrodsburg Rd, Lexington, KY 40504'
};

var options = {
  method: 'POST',
  url: 'https://tryit.airspringsoftware.com/marketing/api/overview.json',
  headers: {
    'cache-control': 'no-cache',
    'content-type': 'application/json'
  },
  body: postParams,
  json: true
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log('airSpring Service Returned:', body);
  download(body.response.pdfRoute, "tryit.pdf", function() {
    console.log("Downloaded pdf: tryit.pdf")
  });

});
