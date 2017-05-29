var request = require("request");
var fs = require('fs');

var download = function(url, dest, cb) {
    var file = fs.createWriteStream(dest);
    var sendReq = request.get(url);

    sendReq.on('response', function(response) {
        if (response.statusCode !== 200) {
            return cb('Response status was ' + response.statusCode);
        }
    });

    sendReq.on('error', function (err) {
        fs.unlink(dest);
        return cb(err.message);
    });

    sendReq.pipe(file);

    file.on('finish', function() {
        file.close(cb);
    });

    file.on('error', function(err) {
        fs.unlink(dest);
        return cb(err.message);
    });
};

var options = { method: 'POST',
  url: 'https://tryit.airspringsoftware.com/marketing/api/overview.json',
  headers: 
   { 'cache-control': 'no-cache',
     'content-type': 'application/json' },
  body: 
   { company: 'airSpring Software',
     email: 'sales@airspringsoftware.com',
     address: '2365 Harrodsburg Rd 2365 Harrodsburg Rd, Lexington, KY 40504',
     phone: '(859) 309-6347' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
  
  var url = body.response.pdfRoute;
  
  download(url, "tryit.pdf", function() {
      console.log("Downloaded pdf: tryit.pdf")
    }
  );
});
