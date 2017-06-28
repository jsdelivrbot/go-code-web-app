var express = require('express');
var path = require('path');
var compression = require('compression');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res) {
  res.redirect('/#' + req.originalUrl);
});

// Production error handler
if (app.get('env') === 'production') {
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.sendStatus(err.status || 500);
  });
}

module.exports = app;
