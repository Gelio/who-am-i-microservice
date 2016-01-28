var port = (process.argv[2] == 'prod' && process.env.PORT) ? process.env.PORT : 3000;

var express = require('express'),
    app = express();

app.get('/*', function(req, res) {
    res.end('Hello world');
});

app.listen(port, function() {
    console.log('Server running on port ' + port);
});