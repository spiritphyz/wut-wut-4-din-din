import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    veggies: [],
    newVeggie: '' 
  },
  // Mutatations are "committed"
  //
  mutations: {
    GET_VEGGIE(state, veggie) {
      state.newVeggie = veggie;
    },
    ADD_VEGGIE(state) {
      state.veggies.push({
        body: state.newVeggie,
        selected: false
      });
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
  //     addTodo = function(store) {
  //       var commit = store.commit
  //       commit('ADD_VEGGIE')
  //     }
  //
  actions: {
    getVeggie({commit}, veggie) {
      commit('GET_VEGGIE', veggie);
    },
    addVeggie({commit}) {
      commit('ADD_VEGGIE');
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
    newVeggie: state => state.newVeggie,
    veggies: state => state.veggies.filter(veggie => !veggie.selected),
    selectedVeggies: state => state.veggies.filter(veggie => veggie.selected)
  }
});