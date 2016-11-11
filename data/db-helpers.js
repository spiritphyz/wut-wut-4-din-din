require('../server/api-keys.js');
const request = require('request');
const bodyParser = require('body-parser');
const mashapeKey = process.env.MASHAPE_KEY;

exports.gatherRecipes = function(req, res) {
  // note: query is for basic HTML only it seems
  var items = req.query.seasonalItems;
  const options = {
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients='
      // + 'cauliflower,brussel sprouts,eggplant'
      + items
      + '&limitLicense=false&number=5&ranking=1',
    headers: {
      'X-Mashape-Key': mashapeKey,
      'Accept': 'application/json'
    }
  };
   
  const cb = (err, response, body) => {
    if (!err) {
      const data = JSON.parse(body);
      res.status(200).send(data);
    }
  };
   
  request(options, cb);
};