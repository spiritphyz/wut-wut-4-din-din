<template>
  <div id="get-veggie" class="container">
    <input class="form-control"
    :value="newVeggie"
    @change="getVeggie"
    placeholder="Add more custom veggies...">
    <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored" @click="addVeggie">Add Veggie</button>
  </div>
</template>

<script>
  export default{
    methods: {
      getVeggie(e) {
        this.$store.dispatch('getVeggie', e.target.value)
      },
      addTodo() {
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