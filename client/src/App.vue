<template>
  <div id="app">
   <form action="getRecipes">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input id="inputSeasonalItems" class="mdl-textfield__input" type="text" name="seasonalItems" />
        <label class="mdl-textfield__label" for="inputSeasonalItems">Add some seasonal items</label>
      </div>
      <div>
        <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
          <i class="material-icons">add</i>
        </button>
      </div>
   </form> 

  </div>
</template>

<script>
  export default {
    name: 'Wut Wut 4 Din Din'
  };
</script>

<style>
#app {
  font-family: 'Open Sans', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 10em;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
