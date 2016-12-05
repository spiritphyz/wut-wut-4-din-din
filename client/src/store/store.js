import Vue from 'vue';
import Vuex from 'vuex';
import { GetTime } from '../components/GetTime';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    territory: '',
    month: '',
    monthPeriod: '',
    veggies: [],
    newVeggie: '' 
  },
  // Mutatations are "committed"
  //
  mutations: {
    SET_TERRITORY(state, territory) {
      state.territory = territory;
    },
    SET_MONTH_PERIOD(state) {
      const day = GetTime('day');
      state.monthPeriod = day < 16 ? 'early' : 'late';
      console.log('🍊  Calculated period of month is', state.monthPeriod);
    },
    SET_MONTH(state) {
      state.month = GetTime('month');
      console.log('🍊  Calculated month is', state.month);
    },
    GET_VEGGIE(state, veggie) {
      state.newVeggie = veggie;
    },
    // maybe adding derivedVeggie breaks the ability to edit
    // the ToDo item
    ADD_VEGGIE(state, derivedVeggie) {
      if (derivedVeggie) {
        state.veggies.push({
          body: derivedVeggie,
          selected: false
        });
      }
      if (!derivedVeggie) {
        state.veggies.push({
          body: state.newVeggie,
          selected: false
        });
      }
    },
    EDIT_VEGGIE(state, veggie) {
      const veggies = state.veggies;
      veggies.splice(veggies.indexOf(veggie), 1);
      state.veggies = veggies;
      state.newVeggie = veggie.body;
    },
    REMOVE_VEGGIE(state, veggie) {
      const veggies = state.veggies;
      veggies.splice(veggies.indexOf(veggie), 1);
    },
    SELECT_VEGGIE(state, veggie) {
      veggie.selected = !veggie.selected;
    },
    CLEAR_VEGGIE(state) {
      state.newVeggie = '';
    }
  },
  // Actions are "dispatched"
  // 
  // Actions use ES6 argument destructuring with shorter syntax
  //    instead of the ES5 equivalent:
  //     addVeggie = function(store) {
  //       var commit = store.commit
  //       commit('ADD_VEGGIE')
  //     }
  //
  actions: {
    setTerritory({commit}, territory) {
      commit('SET_TERRITORY', territory);
    },
    setMonthPeriod({commit}) {
      commit('SET_MONTH_PERIOD');
    },
    setMonth({commit}) {
      commit('SET_MONTH');
    },
    getVeggie({commit}, veggie) {
      commit('GET_VEGGIE', veggie);
    },
    addVeggie({commit}, derivedVeggie) {
      commit('ADD_VEGGIE', derivedVeggie);
    },
    editVeggie({commit}, veggie) {
      commit('EDIT_VEGGIE', veggie);
    },
    removeVeggie({commit}, veggie) {
      commit('REMOVE_VEGGIE', veggie);
    },
    selectVeggie({commit}, veggie) {
      commit('SELECT_VEGGIE', veggie);
    },
    clearVeggie({commit}) {
      commit('CLEAR_VEGGIE');
    }
  },
  getters: {
    territory: state => state.territory,
    monthPeriod: state => state.monthPeriod,
    month: state => state.month,
    newVeggie: state => state.newVeggie,
    veggies: state => state.veggies.filter(veggie => !veggie.selected),
    selectedVeggies: state => state.veggies.filter(veggie => veggie.selected)
  }
});