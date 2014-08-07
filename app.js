var express = require('express'),
    app = express(),
    port = process.env.PORT || 5000,
    environment = process.env.NODE_ENV || 'production';

// app.use(express.logger());
app.use(express.compress());
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// Routes ---------------------------------------
app.get('/:data?*', function (req, res) {
    res.render('index', {
        environment: environment
    });
});

app.use(function (req, res) {
    res.status(404);
    res.render('404', {});
});

// Listen ---------------------------------------
app.listen(port, function () {
    console.log('Listening on port ' + port);
});
