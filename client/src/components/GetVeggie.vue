<template>
  <div>
    <div id="get-veggie" class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input 
        id="inputSeasonalItems"
        class="mdl-textfield__input"
        type="text"
        name="seasonalItems"
        :value="newVeggie"
        @change="getVeggie">
      <label class="mdl-textfield__label" for="inputSeasonalItems">
        Add more custom veggies...
      </label>
    </div>
    <div>
      <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" @click="addVeggie">
        <i class="material-icons">add</i>
      </button>
    </div>
  </div>
</template>


<script>
  export default {
    methods: {
      getVeggie(e) {
        this.$store.dispatch('getVeggie', e.target.value)
      },
      addVeggie() {
        this.$store.dispatch('addVeggie')
        this.$store.dispatch('clearVeggie')
      }
    },
    computed: {
      newVeggie() {
        return this.$store.getters.newVeggie
      }
    }
  }
</script>