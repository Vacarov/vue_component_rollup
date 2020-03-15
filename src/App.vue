<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Mastery msg="Welcome to Your Vue.js Mastery courses"/>
  </div>
</template>

<script>
import Mastery from './components/Mastery.vue'

export default {
  name: 'App',
  components: {
    Mastery
  }
}
</script>

<style lang="sass" src="bulma"></style>

<style>
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
