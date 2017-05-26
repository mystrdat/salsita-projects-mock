<template>
  <main>
    <section class="jumbotron">
      <div>
        <slot name="jumbotron"></slot>
      </div>
    </section>
    <section class="introduction">
      <div>
        <slot name="introduction"></slot>
      </div>
    </section>
    <section class="showcase">
      <div>
        <slot name="showcase">SHOWCASE DEFAULT SLOT</slot>
      </div>
    </section>
    <partial-about></partial-about>
    <section class="contact">
      <div>
        <slot name="contact">CONTACT DEFAULT SLOT</slot>
      </div>
    </section>
    <partial-offices></partial-offices>
  </main>
</template>

<script>
import PartialAbout from '@/components/partials/PartialAbout'
import PartialOffices from '@/components/partials/PartialOffices'

export default {
  name: 'app-content-landing',
  components: {
    PartialAbout,
    PartialOffices
  },
  metaInfo: {
    titleTemplate: '%s - Salsita Software'
  }
}
</script>

<style lang="sass" scoped>
@import ../styles/shared

section
  > div
    +clearfix
    padding: 10*$base 1.5*$base
    max-width: $contentMaxWidth
    margin: 0 auto

    +media('<=desktop')
      padding: 3*$base 1.5*$base

  h2
    margin: 0 0 3*$base 0
    font-size: $fontXXL
    font-weight: $fontLight

    +media('<=mobile')
      font-size: rem(30)
      text-align: center

  h3
    margin: 0 0 3*$base 0
    font-size: $fontXL
    font-weight: $fontRegular

    +media('<=mobile')
      font-size: $fontL
      text-align: center
</style>
