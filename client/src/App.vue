<template>
  <div id="app" class="container">
    <SelectedVeggies></SelectedVeggies>
    <GetVeggie></GetVeggie>
    <CurrentVeggies></CurrentVeggies>
  </div>
</template>

<script>
  import GetVeggie from './components/GetVeggie.vue';
  import CurrentVeggies from './components/CurrentVeggies.vue';
  import SelectedVeggies from './components/SelectedVeggies.vue';
  export default {
    components: {
      GetVeggie,
      CurrentVeggies,
      SelectedVeggies
    }
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
