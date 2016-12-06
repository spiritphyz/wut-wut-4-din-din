<template>
  <div id="selected-veggies">
    <h3 v-if="selected.length > 0">Selected</h3>
    <h4 v-if="selected.length > 0">Current: {{selected.length}}</h4>
    <ul class="demo-list-item mdl-list">
      <li class="mdl-list__item" v-for="veggie in selected">
        {{veggie.body}}
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect selected-btn" @click="remove(veggie)">
           Remove
          </button>
      </li>
    </ul>
    <form action="getRecipes">
    <input type="hidden" name="seasonalItems" :value="selectedAsString">
    <button v-if="selected.length > 0" type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
      Get Recipes
      <i class="material-icons">face</i>
    </button>
    </form>
  </div>
</template>
<script>
  export default{
    methods: {
      remove(veggie){
        this.$store.dispatch('removeVeggie', veggie);
      }
    },
    computed: {
      selected () {
        return this.$store.getters.selectedVeggies;
      },
      selectedAsString () {
        let result = '';
        let selected = this.$store.getters.selectedVeggies;
        for (const obj of selected) {
          result += obj.body + ',';
        }
        console.log('🍊  selectedAsString is:', result.slice(0, -1));
        return result.slice(0, -1);
      }
    }
  }
</script>

<style>
  .selected-btn{
    margin-left: 10px;
  }
</style>