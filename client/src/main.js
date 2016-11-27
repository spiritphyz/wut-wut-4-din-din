import Vue from 'vue';
import App from './App.vue';
import store from './store/store';
import { CA } from './produce/California';

const checkProduce = () => {
  console.log('🍊  California late dec produce is', CA.December.late.produce);
};

const getLocation = function() {
  // Can't use browser navigator.getLocation() because
  // of HTTPS requirements. Can't make calls to freegeoip
  // without CORS proxy.
  // fetch('https://crossorigin.me/http://freegeoip.net/json/', {
  fetch('http://freegeoip.net/json/', {
    mode: 'cors'
  })
  .then(response => {
    response.json().then(data => {
      const country = data.country_name;
      const state = data.region_name;
      console.log('🍊  country is', country);
      console.log('🍊  state is', state);
    });
  })
  .catch(err => console.log('could not fetch', err.message));

  // const url = 'http://freegeoip.net/json/';
  // $.ajax(url, {dataType: 'jsonp'})
  // .then(response => {
  //   console.log('🍊  response is', response);
  // }, err => {
  //   console.log('🍊  ajax error', err);
  // });
};

const getTime = function() {
  const month = moment().format('MMMM');
  const day = moment().format('D');
  console.log('🍊  month is', month);
  console.log('🍊  day is', day);
};

const gather = function() {
  getLocation();
  getTime();
  checkProduce();
};

new Vue({
  el: '#app',
  store,
  created: gather,
  render: h => h(App)
});
