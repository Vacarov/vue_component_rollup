<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Mastery msg="Pool 1: Best Language"/>
    <Mastery msg="Pool 2: Best IDE "/>
    <hr>

    <div v-for="review in reviews" :key="review.name">
      <p v-text="review.name"></p>
      <p v-text="review.review"></p>
      <p v-text="review.rating"></p>
    </div>
    <PoolForm @review-submitted="addReview"></PoolForm>
  </div>
</template>

<script>
import Mastery from './components/Mastery.vue'
import PoolForm from "@/components/PoolForm";

export default {
  name: 'App',
  components: {
    PoolForm,
    Mastery
  },
  methods: {
    addReview(review) {
      console.log(review)
      this.reviews.push(review);
    }
  },
  data() {
    return {
      reviews: []
    }
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
