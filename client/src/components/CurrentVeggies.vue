<template>
<div id="current-veggies">
    <h3 v-if="veggies.length > 0">Current ({{veggies.length}})</h3>
    <ul class="demo-list-item mdl-list">
      <li class="mdl-list__item" v-for="veggie in veggies">
        {{veggie.body}}
        <div class="btn-group">
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" @click="edit(veggie)">
            <i class="material-icons mdl-list__item-icon">edit</i> Edit
          </button>
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" @click="select(veggie)">
            <i class="material-icons mdl-list__item-icon">add circle outline</i> Select
          </button>
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" @click="remove(veggie)">
            <i class="material-icons mdl-list__item-icon">remove circle outline</i> Remove
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    methods: {
      edit(veggie){
        this.$store.dispatch('editVeggie', veggie)
      },
      select(veggie){
        this.$store.dispatch('selectVeggie', veggie)
      },
      remove(veggie){
        this.$store.dispatch('removeVeggie', veggie)
      }
    },
    computed: {
      veggies(){
        return this.$store.getters.veggies
      }
    }
  }
</script>
<style>
  .btn-group{
    float: right;
  }
</style>