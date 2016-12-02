var express = require('express');
var pg = require('pg');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function (request, response) {
    response.send('Hello World!');
});

app.get('/db', function (request, response) {
    pg.connect(process.env.DATABASE_URL, function(err, client){
        client.query("SELECT * FRON test", function(err, result){
            if(err) throwerr;
            response.send(JSON.stringify(result));
            client.end(function (err){
                if (err) throw err;
            });
        });
    });
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});