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

  // const data = [
  //   {
  //     'id': 625596,
  //     'title': 'Roasted Brussels Sprouts, Cauliflower, and Radishes With Garlic Aioli From The \'Kitchn Cookbook\'',
  //     'image': 'https://spoonacular.com/recipeImages/Roasted-Brussels-Sprouts--Cauliflower--and-Radishes-With-Garlic-Aioli-From-The-Kitchn-Cookbook-625596.jpg',
  //     'imageType': 'jpg',
  //     'usedIngredientCount': 2,
  //     'missedIngredientCount': 2,
  //     'likes': 11
  //   },
  //   {
  //     'id': 450729,
  //     'title': 'Roasted Cauliflower & Brussels Sprouts with Bacon',
  //     'image': 'https://spoonacular.com/recipeImages/Roasted-Cauliflower---Brussels-Sprouts-with-Bacon-450729.jpg',
  //     'imageType': 'jpg',
  //     'usedIngredientCount': 2,
  //     'missedIngredientCount': 2,
  //     'likes': 0
  //   },
  //   {
  //     'id': 762045,
  //     'title': 'Roasted Cauliflower and Brussels Sprouts',
  //     'image': 'https://spoonacular.com/recipeImages/roasted-cauliflower-and-brussels-sprouts-762045.jpg',
  //     'imageType': 'jpg',
  //     'usedIngredientCount': 2,
  //     'missedIngredientCount': 2,
  //     'likes': 632
  //   },
  //   {
  //     'id': 11016,
  //     'title': 'Herbed Chicken Cutlets With Roasted Winter Vegetables',
  //     'image': 'https://spoonacular.com/recipeImages/herbed_chicken_cutlets_with_roasted_winter_vegetables-11016.jpg',
  //     'imageType': 'jpg',
  //     'usedIngredientCount': 2,
  //     'missedIngredientCount': 2,
  //     'likes': 67
  //   },
  //   {
  //     'id': 23650,
  //     'title': 'Cauliflower, Fried Aubergine And Black Olives',
  //     'image': 'https://spoonacular.com/recipeImages/cauliflower-fried-aubergine-and-black-olives-2-23650.jpg',
  //     'imageType': 'jpg',
  //     'usedIngredientCount': 2,
  //     'missedIngredientCount': 3,
  //     'likes': 2
  //   }
  // ];
   
  // res.status(200).send(data);
};