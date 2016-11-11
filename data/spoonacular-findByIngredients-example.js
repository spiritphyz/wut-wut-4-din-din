/* eslint-disable */
// example response findByIngredients endpoints

// endpoint: 
GET https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients

// curl example
curl --get --include 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=apples%2Cflour%2Csugar&limitLicense=false&number=5&ranking=1' \
  -H 'X-Mashape-Key: eQBATQVEllmshtjjA9q925YYZ2Sxp1b74AHjsnUgVlghmIqCuQ' \
  -H 'Accept: application/json'


HTTP/1.1 200 OK
Access-Control-Allow-Headers: *
Access-Control-Allow-Methods: : GET, HEAD, POST, OPTIONS, DELETE, PUT
Allow-Control-Allow-Methods: : GET, HEAD, POST, OPTIONS, DELETE, PUT
Allow-Control-Allow-Origin: *
Connection: keep-alive
Content-Encoding: gzip
Content-Length: 466
Content-Type: application/json
Date: Thu, 10 Nov 2016 23:34:50 GMT
Server: Mashape/5.0.6
X-Ratelimit-Classifications-Limit: 50
X-Ratelimit-Classifications-Remaining: 50
X-Ratelimit-Requests-Limit: 50
X-Ratelimit-Requests-Remaining: 48
X-Ratelimit-Tinyrequests-Limit: 500
X-Ratelimit-Tinyrequests-Remaining: 499

[
  {
    "id": 625596,
    "title": "Roasted Brussels Sprouts, Cauliflower, and Radishes With Garlic Aioli From 'The Kitchn Cookbook",
    "image": "https://spoonacular.com/recipeImages/Roasted-Brussels-Sprouts--Cauliflower--and-Radishes-With-Garlic-Aioli-From-The-Kitchn-Cookbook-625596.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 2,
    "missedIngredientCount": 2,
    "likes": 11
  },
  {
    "id": 450729,
    "title": "Roasted Cauliflower & Brussels Sprouts with Bacon",
    "image": "https://spoonacular.com/recipeImages/Roasted-Cauliflower---Brussels-Sprouts-with-Bacon-450729.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 2,
    "missedIngredientCount": 2,
    "likes": 0
  },
  {
    "id": 762045,
    "title": "Roasted Cauliflower and Brussels Sprouts",
    "image": "https://spoonacular.com/recipeImages/roasted-cauliflower-and-brussels-sprouts-762045.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 2,
    "missedIngredientCount": 2,
    "likes": 632
  },
  {
    "id": 11016,
    "title": "Herbed Chicken Cutlets With Roasted Winter Vegetables",
    "image": "https://spoonacular.com/recipeImages/herbed_chicken_cutlets_with_roasted_winter_vegetables-11016.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 2,
    "missedIngredientCount": 2,
    "likes": 67
  },
  {
    "id": 23650,
    "title": "Cauliflower, Fried Aubergine And Black Olives",
    "image": "https://spoonacular.com/recipeImages/cauliflower-fried-aubergine-and-black-olives-2-23650.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 2,
    "missedIngredientCount": 3,
    "likes": 2
  }
]