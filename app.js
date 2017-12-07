'use strict';

var SwaggerExpress = require('swagger-express-mw');
var cors = require('cors');
var app = require('express')();
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

var corsOptions = {
  credentials: true,
  origin: function (origin, callback) {
    if (origin === undefined) {
      callback(null, false);
    } else {
      // change wordnik.com to your allowed domain. 
      var match = origin.match("*");
      var allowed = (match !== null && match.length > 0);
      callback(null, allowed);
    }
  }
};

app.use(cors(corsOptions));



SwaggerExpress.create(config, function (err, swaggerExpress) {
  if (err) {
    throw err;
  }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10011;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('Then, open a second command line and launch the editor with: "swagger project" edit');
  }
});