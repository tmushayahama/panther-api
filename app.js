'use strict';

var SwaggerExpress = require('swagger-express-mw');
var cors = require('cors');
var app = require('express')();
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

var corsOptions = {
  credentials: false,
  origin: function (origin, callback) {
    if (origin === undefined) {
      callback(null, false);
    } else {
      //var match = origin.match("^(.*)?.http://127.0.0.1(\:[0-9]+)?");
      // var allowed = (match !== null && match.length > 0);
      callback(null, true);
    }
  }
};

app.use(cors());



SwaggerExpress.create(config, function (err, swaggerExpress) {
  if (err) {
    throw err;
  }

  // install middleware
  swaggerExpress.register(app);

  var port = 10012;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/overrep']) {
    console.log('Then, open a second command line and launch the editor with: "swagger project" edit');
  }
});