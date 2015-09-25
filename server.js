
'use stric';

var hbs = require('hbs');

var express = require('express');
var app = express();

app.engine('html', hbs.__express);

var somethingJSON = [
  1,
  2,
  3
];

app.use('/static', express.static(__dirname + '/static'));

app.get('/', function (req, res) {
  res.render('index.html');
});

app.get('/tweets', function (req, res) {
  res.json(somethingJSON);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
