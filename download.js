var request = require('request');
var fs = require('fs');

// Provides a download function that will download
// the given url and save it at the destination.

module.exports = function(url, dest, cb) {
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
