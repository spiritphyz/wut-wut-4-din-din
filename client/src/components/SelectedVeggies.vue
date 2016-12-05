<template>
  <div id="selected-veggies">
    <h3 v-if="selected.length > 0">Selected ({{selected.length}})</h3>
    <ul class="demo-list-item mdl-list">
      <li class="mdl-list__item" v-for="veggie in selected">
        {{veggie.body}}
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" @click="remove(veggie)">
          <i class="material-icons mdl-list__item-icon">remove circle outline</i> Remove
        </button>
      </li>
    </ul>
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
      selected(){
        return this.$store.getters.selectedVeggies;
      }
    }
  }
</script>