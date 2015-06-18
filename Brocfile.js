/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  'ember-cli-bootswatch': 'paper'
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

// BOOTSTRAP
app.import('bower_components/bootstrap/dist/js/bootstrap.js');
// app.import('bower_components/bootstrap/dist/css/bootstrap.css');
app.import('bower_components/bootstrap/dist/css/bootstrap.css.map');
// app.import('bower_components/bootswatch/paper/js/bootswatch.js');
app.import('bower_components/bootswatch/paper/bootstrap.css');
// app.import('bower_components/bootswatch/paper/css/bootswatch.css.map');

// MOMENT DATE FORMAT
app.import('bower_components/moment/min/moment.min.js');

module.exports = app.toTree();
