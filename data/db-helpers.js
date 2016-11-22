require('../server/api-keys.js');
const request = require('request');
const bodyParser = require('body-parser');
const redis = require('redis');
const mashapeKey = process.env.MASHAPE_KEY;

const redisClient = redis.createClient();

exports.gatherRecipes = function(sortedItems, res) {

  // NOTE: live API request is disabled because the
  // Spoonacular recipes endpoint seems to only give me 50 free
  // lifetime requests when it ought to give me 50 per day
  // (it's not being reset daily)

  // note: req.query (not req.body) is for basic HTML forms it seems
  // const items = req.query.seasonalItems;

  const items = sortedItems;
  const options = {
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients='
      + items
      + '&limitLicense=false&number=5&ranking=1',
    headers: {
      'X-Mashape-Key': mashapeKey,
      'Accept': 'application/json'
    }
  };
   
  const cb = (err, response, body) => {
    if (err) {
      console.log('🍊  error in Spoonacular API lookup!', err);
      res.status(404).send('Error in Spoonacular API lookup');
    } else {
      const parsedData = JSON.parse(body);
      redisClient.set(items, body, redis.print);
      res.status(200).send(parsedData);
    }
  };

  request(options, cb);

  /* Enable this to send back dummy data to avoid getting charged
     for expensive Spoonacular API calls */
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