const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const redis = require('redis');
const db = require('../data/db-helpers.js');

const metadata = require('../package.json');
const port = '1688';
require('./api-keys.js');

// attach middleware
const app = express();
const redisClient = redis.createClient();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// register location of static files
// app.use(express.static(__dirname + '../client'));
app.use(express.static(path.join(__dirname, '../client'))); 

// default route
app.get('/', function(req, res) {
  // res.sendFile('./index.html', {'root': '../client'});
  res.sendFile(path.join(__dirname, '/../client/index.html'));
});

// getRecipe route
/* Input: req.query is an object of key-value pairs */
app.get('/getRecipes', function(req, res) {
  const query = req.query.seasonalItems;
  const sortedItems = query.split(',')
    .sort((x, y) => x.localeCompare(y))
    .join(',');
  redisClient.get(sortedItems, function(err, reply) {
    if (err) {
      console.log('🍊  Error in fetching from Redis', err);
      res.status(200).send('Error in fetching from Redis', err);
    }
    if (reply) {
      var parsed = JSON.parse(reply);
      console.log('🍊  Found in Redis!', sortedItems);
      res.status(200).send(parsed);
    } else {
      console.log('🍊  Not found in Redis:', sortedItems);
      db.gatherRecipes(sortedItems, res);
    }
  });
});

// wildcard route
app.get('*', function(req, res) {
  res.status(404).send('Not Found');
});

// start server
app.listen(port);
console.log('🍊  listening on', port, 'for app:', metadata.name);
