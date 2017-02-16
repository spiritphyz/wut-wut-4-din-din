<template>
  <div id="app" class="container">
    <div class="eggplant">
      <img src="https://cloud.githubusercontent.com/assets/7908723/20235152/59d8d64a-a83f-11e6-9534-4119d03f3874.png" width="80" align="left">
    </div>
    <br><br><br><br>
    <h1>What&rsquo;s For Dinner?</h1>
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
    /*text-align: center;*/
    font-size: 10em;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }

  .eggplant {
    padding: 10px 20px 40px 20px;
  }

  h1 {
    font-size: 26px;
    font-weight: regular;
    text-align: left;
    padding-left: 20px;
  }

  h2, h3, h4 {
    font-size: 18px;
    font-weight: light;
    text-align: left;
    padding-left: 20px;
    margin-top: 0px;
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
