<template>
<div id="current-veggies">
  {{ deriveLocation }}
  {{ deriveMonthPeriod }}
  {{ deriveMonth }}
  <h3>In-season items for {{ usaState }}, {{ monthPeriod }} {{ month }}</h3>
  <h4 v-if="veggies.length > 0">Current: {{veggies.length}}</h4>
  <ul class="demo-list-item mdl-list">
    <li class="mdl-list__item" v-for="veggie in veggies">
      {{veggie.body}}
      <div class="btn-group">
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" @click="edit(veggie)">
          Edit
        </button>
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" @click="select(veggie)">
          Select
        </button>
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" @click="remove(veggie)">
          Remove
        </button>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
  import { Seasonal } from '../produce/Seasonal';

  export default {
    methods: {
      edit(veggie) {
        this.$store.dispatch('editVeggie', veggie);
      },
      select(veggie) {
        this.$store.dispatch('selectVeggie', veggie);
      },
      remove(veggie) {
        this.$store.dispatch('removeVeggie', veggie);
      }
    },
    computed: {
      deriveMonthPeriod () {
        this.$store.dispatch('setMonthPeriod');
      },

      deriveMonth () {
        this.$store.dispatch('setMonth');
      },

      monthPeriod () {
        return this.$store.getters.monthPeriod;
      },

      month () {
        return this.$store.getters.month;
      },

      usaState () {
        return this.$store.getters.territory;
      },

      veggies () {
        return this.$store.getters.veggies;
      },

      deriveLocation () {
          const context = this;
          // const url = 'https://crossorigin.me/http://freegeoip.net/json/';
          const url = 'http://freegeoip.net/json/';

          // mocked usaState info
          const newTerritory = 'Oregon';
          context.$store.dispatch('setTerritory', newTerritory);

          const usaState = context.$store.getters.territory; 
          console.log('🍊  usaState is', usaState);
          const month = 'December';
          console.log('🍊  month is', month);
          const monthPeriod = 'early';
          console.log('🍊  monthPeriod is', monthPeriod);
          const seasonal = Seasonal[usaState][month][monthPeriod].produce;
          console.log('🍊  seasonal array is', seasonal);
          for (let veg of seasonal) {
            context.$store.dispatch('addLocalVeggie', veg);
          }

          // const req = new XMLHttpRequest();
          // req.open('GET', url, true);
          // req.onload = function() {
          //   console.log('🍊  Executing XHR to', url);
          //   if (req.status >= 200 && req.status < 400) {
          //     let data = JSON.parse(req.responseText);
          //     console.log('🍊  GeoIP response is', data);
          //     const country = data.country_name;
          //     const newTerritory = data.region_name;
          //     console.log('🍊  GeoIP Country is', country);
          //     console.log('🍊  GeoIP State is', newTerritory);
          //     context.$store.dispatch('setTerritory', newTerritory);

          //     // derive veggies from geolocation & current date
          //     const usaState = context.$store.getters.territory; 
          //     const month = context.$store.getters.month;
          //     const monthPeriod = context.$store.getters.monthPeriod;
          //     const seasonal = Seasonal[usaState][month][monthPeriod].produce;
          //     console.log('🍊  seasonal local veggies are:', seasonal);
          //     for (let veg of seasonal) {
          //       context.$store.dispatch('addLocalVeggie', veg);
          //     }
          //   } else {
          //     console.log('🍊  Reached geoip server but got error');
          //   }
          // };
          // req.onerror = function(msg) {
          //   console.log('🍊  Could not fetch geolocation:', msg);
          // };
          // req.send();
      }
    }
  }
</script>

<style>
  .btn-group{
    float: right;
    padding-left: 15px;
  }
</style>