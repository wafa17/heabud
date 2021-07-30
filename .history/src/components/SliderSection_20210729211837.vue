<template>
  <div id="app">
    <vue-glide>
      <vue-glide-slide
        v-for="i in 5"
        :key="i">
        Slide {{ i }}
      </vue-glide-slide>
    </vue-glide>
  </div>
</template>

<script>
// import VueGlide from 'vue-glide-js/src/components/Glide.vue'
import VueGlideSlide from 'vue-glide-js/src/components/GlideSlide.vue'

export default {
  components: {
    [VueGlide.name]: VueGlide,
    [VueGlideSlide.name]: VueGlideSlide
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .demo {
    .glide {
      &__slide {
        display: flex;
        border: 2px solid #ccc;
        height: 200px;
        align-items: center;
        justify-content: center;
        color: #aaa;
        font-size: 36px;
        font-weight: 600;
        border-radius: 5px;
        transition: all .3s;
        opacity: .3;
        &--active {
          border: none;
          color: #fff;
           opacity: 1;
          // background: linear-gradient(-45deg,#ed145b,#7b31f4);
          background-color: limegreen;
        }
      }
    }
  }
}
</style>
