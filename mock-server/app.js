var express = require('express');
var app = express();

var userRouter = require('./router/user');
var mallRouter = require('./router/mall');

app.use('/cgi/user', userRouter);
app.use('/cgi/mall', mallRouter);

var server = app.listen(3000, function () {
  console.log('mock server listening at http://localhost:3000');
});