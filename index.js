var port = (process.argv[2] == 'prod' && process.env.PORT) ? process.env.PORT : 3000;

var express = require('express'),
    app = express();

app.get('/*', function(req, res) {
    var responseObject = {
        ipaddress: req.ip,
        language: 'unknown',
        software: /\([^()]*\)/.exec(req.headers['user-agent'])[0]
    };

    // Get the firsr language from the list
    if (req.headers['accept-language']) {
        var languages = req.headers['accept-language'].split(';');
        if (languages.length > 0)
            responseObject.language = languages;
    }

    // Remove the parentheses from software
    responseObject.software = responseObject.software.slice(1, responseObject.software.length-1);

    res.json(responseObject);
});

app.listen(port, function() {
    console.log('Server running on port ' + port);
});