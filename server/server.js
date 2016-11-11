const express = require('express');
const bodyParser = require('body-parser');
const db = require('../data/db-helpers.js');
const port = '1688';
require('./api-keys.js');

// attach services
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// register location of static files
app.use(express.static(__dirname + '../client'));

// default route
app.get('/', function(req, res) {
  res.sendFile('./index.html', {'root': '../client'});
});

// getRecipe route
app.get('/getRecipes', function(req, res) {
  db.gatherRecipes(req, res);
});

// wildcard route
app.get('*', function(req, res) {
  res.status(404).send('Not Found');
});

// start server
app.listen(port);
console.log('🍊  listening on', port);