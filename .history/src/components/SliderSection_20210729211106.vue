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
import VueGlide from 'vue-glide-js/src/components/Glide.vue'
import VueGlideSlide from 'vue-glide-js/src/components/GlideSlide.vue'

export default {
  components: {
    [VueGlide.name]: VueGlide,
    [VueGlideSlide.name]: VueGlideSlide
  }
}
</script>
