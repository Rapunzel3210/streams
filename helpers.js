// Helpers

// Global dependencies
var Twitter = require('twitter');

var Helpers = {};

Helpers.getTwitterClient = function() {
  // Add your keys and access token credentials for your Twitter
  // developer application.
  // TODO: Move these values to environment variables. It's very
  // insecure to keep these values in your source code.
  var client = new Twitter({
    consumer_key: 'i9qvHlDTTgS3uZqtNtGow8IVw',
    consumer_secret: 'YzyBWhF0jUxuxpb8aDOwwbtFDUxPnB9HV4rJEA8fQ8I1lvr7Hr',
    access_token_key: '741678925466701826-LUll2RJvKpAh9lVaB2raPlanYwrvLtJ',
    access_token_secret: 'bY5r0D7IwSU5ZGTyIxW0gknRD2JwZBsnjuzOiG5IRXIv6'
  });

  return client;
};

module.exports = Helpers;
