<template>
<div id="current-veggies">
  {{ deriveLocation }}
  {{ deriveMonthPeriod }}
  {{ deriveMonth }}
  {{ deriveVeggies }}
  <h3>In-season items for {{ usaState }} {{ monthPeriod }} {{ month }}</h3>
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
  // import { GetTime } from './GetTime';

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
          fetch('http://freegeoip.net/json/', {mode: 'cors'})
          .then(function(response) {
            response.json().then(function(data) {
              const country = data.country_name;
              const newTerritory = data.region_name;
              console.log('🍊  GeoIP Country is', country);
              console.log('🍊  GeoIP State is', newTerritory);
              context.$store.dispatch('setTerritory', newTerritory);
            });
          })
          .catch(err => console.log('Could not fetch geolocation', err.message));
      },

      deriveVeggies () {
        // Seasonal.California.November.early.produce

      }
    }
  }

  // this.$store.dispatch('getVeggie', 'test');
  // this.$store.dispatch('addVeggie');
</script>

<style>
  .btn-group{
    float: right;
    padding-left: 15px;
  }
</style>