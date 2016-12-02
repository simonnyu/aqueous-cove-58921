var express = require('express');
var pg = require('pg');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function (request, response) {
    response.send('Hello World!');
});

app.get('/db', function (request, response) {
    pg.connect(process.env.DATABASE_URL, function (err, client, done) {
        client.query('SELECT * FROM test_table', function (err, result) {
            done();
            if (err) {
                console.error(err);
                response.send("Error " + err);
            } else {
                response.send("successful");
            }
        });
    });
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});