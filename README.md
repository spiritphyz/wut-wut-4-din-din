<img src="https://cloud.githubusercontent.com/assets/7908723/20235152/59d8d64a-a83f-11e6-9534-4119d03f3874.png" width="100">
# What’s for Dinner? #
Get recipes based on what's in season for your location.

## Basic Workflow ##
 - Get user's current location through browser Geo Location
 - Look up food items on what's in season (API or database)
 - Present the list of in-season items and allows the user to pick 3 
   - Or just randomly pick 3 food items
 - Gather recipes based on the 3 selected items
 - User can bring recipes to the farmer's market and get the main ingredients
   - If there is an API that lists farmer's markets nearby, suggest a market

## Goals ##
Use unknown technologies to implement a full-stack app.
 - Spoonacular API
 - (maybe an API for in-season food)
 - (maybe an API for nearby farmer's markets)
 - Cassandra for storage
 - Redis to cache prior ingredient look-ups
 - Vue.JS for front-end components
 - Vuex for state management for Vue (similar to Redux)
 - Material Design for design and layout