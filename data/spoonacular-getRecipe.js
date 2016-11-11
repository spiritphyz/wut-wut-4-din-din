/* eslint-disable */
// example response findByIngredients endpoints

// endpoint: 
GET https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/{id}/information

// curl example
curl --get --include 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/156992/information?includeNutrition=false' \
  -H 'X-Mashape-Key: eQBATQVEllmshtjjA9q925YYZ2Sxp1b74AHjsnUgVlghmIqCuQ' \
  -H 'Accept: application/json'

api testing key:
eQBATQVEllmshtjjA9q925YYZ2Sxp1b74AHjsnUgVlghmIqCuQ

// node example
// These code snippets use an open-source library. http://unirest.io/nodejs
unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/156992/information?includeNutrition=false")
.header("X-Mashape-Key", "eQBATQVEllmshtjjA9q925YYZ2Sxp1b74AHjsnUgVlghmIqCuQ")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});

HTTP/1.1 200 OK
Access-Control-Allow-Headers: *
Access-Control-Allow-Methods: : GET, HEAD, POST, OPTIONS, DELETE, PUT
Allow-Control-Allow-Methods: : GET, HEAD, POST, OPTIONS, DELETE, PUT
Allow-Control-Allow-Origin: *
Connection: keep-alive
Content-Encoding: gzip
Content-Length: 1550
Content-Type: application/json
Date: Fri, 11 Nov 2016 00:27:15 GMT
Server: Mashape/5.0.6
X-Ratelimit-Classifications-Limit: 50
X-Ratelimit-Classifications-Remaining: 50
X-Ratelimit-Requests-Limit: 50
X-Ratelimit-Requests-Remaining: 49
X-Ratelimit-Tinyrequests-Limit: 500
X-Ratelimit-Tinyrequests-Remaining: 500

{
  "vegetarian": false,
  "vegan": false,
  "glutenFree": true,
  "dairyFree": true,
  "veryHealthy": false,
  "cheap": false,
  "veryPopular": false,
  "sustainable": false,
  "weightWatcherSmartPoints": 1,
  "gaps": "no",
  "lowFodmap": false,
  "ketogenic": false,
  "whole30": true,
  "servings": 4,
  "sourceUrl": "http://www.seriouseats.com/recipes/2015/01/roasted-brussels-sprouts-cauliflower-and-radishes-the-kitchn-cookbook.html",
  "spoonacularSourceUrl": "https://spoonacular.com/roasted-brussels-sprouts-cauliflower-and-radishes-with-garlic-aioli-from-the-kitchn-cookbook-625596",
  "aggregateLikes": 11,
  "creditText": "Serious Eats",
  "sourceName": "Serious Eats",
  "extendedIngredients": [
    {
      "id": 93758,
      "aisle": "Condiments",
      "image": "https://spoonacular.com/cdn/ingredients_100x100/aioli.jpg",
      "name": "aioli",
      "amount": 4,
      "unit": "servings",
      "unitShort": "servings",
      "unitLong": "servings",
      "originalString": "Garlic Aïoli for dipping",
      "metaInformation": [
        "for dipping"
      ]
    },
    {
      "id": 1002030,
      "aisle": "Spices and Seasonings",
      "image": "https://spoonacular.com/cdn/ingredients_100x100/pepper.jpg",
      "name": "black pepper",
      "amount": 4,
      "unit": "servings",
      "unitShort": "servings",
      "unitLong": "servings",
      "originalString": "Freshly ground black pepper",
      "metaInformation": [
        "black",
        "freshly ground"
      ]
    },
    {
      "id": 11098,
      "aisle": "Produce",
      "image": "https://spoonacular.com/cdn/ingredients_100x100/brussels-sprouts.jpg",
      "name": "brussels sprouts",
      "amount": 8,
      "unit": "ounces",
      "unitShort": "oz",
      "unitLong": "ounces",
      "originalString": "8 ounces Brussels sprouts, trimmed and halved",
      "metaInformation": [
        "trimmed",
        "halved"
      ]
    },
    {
      "id": 11135,
      "aisle": "Produce",
      "image": "https://spoonacular.com/cdn/ingredients_100x100/cauliflower.jpg",
      "name": "cauliflower",
      "amount": 12,
      "unit": "ounces",
      "unitShort": "oz",
      "unitLong": "ounces",
      "originalString": "12 ounces cauliflower (about 1/2 large head), trimmed, halved, and cut into 1-inch pieces",
      "metaInformation": [
        "large",
        "trimmed",
        "halved",
        "cut into 1-inch pieces",
        "( 1/2 head)"
      ]
    },
    {
      "id": 4517,
      "aisle": "Oil, Vinegar, Salad Dressing",
      "image": "https://spoonacular.com/cdn/ingredients_100x100/vegetable-oil.jpg",
      "name": "grapeseed oil",
      "amount": 1,
      "unit": "tablespoon",
      "unitShort": "T",
      "unitLong": "tablespoon",
      "originalString": "1 tablespoon vegetable or grapeseed oil, or any other oil with a high smoke point",
      "metaInformation": [
        "or any other oil with a high smoke point"
      ]
    },
    {
      "id": 1082047,
      "aisle": "Spices and Seasonings",
      "image": "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg",
      "name": "kosher salt",
      "amount": 1,
      "unit": "teaspoon",
      "unitShort": "t",
      "unitLong": "teaspoon",
      "originalString": "1 teaspoon kosher salt",
      "metaInformation": []
    },
    {
      "id": 11429,
      "aisle": "Produce",
      "image": "https://spoonacular.com/cdn/ingredients_100x100/radishes.jpg",
      "name": "radishes",
      "amount": 8,
      "unit": "ounces",
      "unitShort": "oz",
      "unitLong": "ounces",
      "originalString": "8 ounces radishes, trimmed and quartered",
      "metaInformation": [
        "trimmed",
        "quartered"
      ]
    }
  ],
  "id": 625596,
  "title": "Roasted Brussels Sprouts, Cauliflower, and Radishes With Garlic Aioli From 'The Kitchn Cookbook",
  "readyInMinutes": 40,
  "image": "https://spoonacular.com/recipeImages/Roasted-Brussels-Sprouts--Cauliflower--and-Radishes-With-Garlic-Aioli-From-The-Kitchn-Cookbook-625596.jpg",
  "imageType": "jpg",
  "cuisines": [],
  "instructions": "Procedures