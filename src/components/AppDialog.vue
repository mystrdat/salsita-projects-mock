<template>
  <dialog-container>
    <button class="close" @click="closeDialog">Close this hogfuck</button>
    <h2>
      {{ $route.params.slide || 'Defaulto' }}
    </h2>
    <p class="description">
      Servus! Das Kastrat bauchpinseln das adrett Schäferstündchen. Die Rädelsführer friemeln der garstig Personenvereinzelungsanlage. Pranger und Wendehals flanieren bierernst Schmock.
    </p>
    <carousel :paginationEnabled="false">
      <slide>
        Slide 1 Content
      </slide>
      <slide>
        Slide 2 Content
      </slide>
      <slide>
        Slide 3 Content
      </slide>
      <slide>
        Slide 4 Content
      </slide>
      <slide>
        Slide 5 Content
      </slide>
      <slide>
        Slide 6 Content
      </slide>
    </carousel>
  </dialog-container>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'app-dialog',
  components: {
    Carousel,
    Slide
  },
  methods: {
    closeDialog () {
      this.$router.push(this.$route.matched[0].path)
    }
  }
}
</script>

<style lang="sass" scoped>
@import ../styles/shared

dialog-container
  +fix(0 $headerHeight 0 0)
  display: block
  background-color: rgba(0,0,0,0.8)
  will-change: transform
  z-index: 1000
  color: #fff

  +media('<tablet')
    top: $headerHeightMobile

button
  color: #fff
</style>

<style lang="sass">
// Carousel
.VueCarousel
  height: 400px

.VueCarousel-wrapper
  height: 100%
</style>
