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
        <slot name="showcase">SHOWCASE DEFAULT</slot>
      </div>
    </section>
    <section class="about">
      <div>
        <partial-about></partial-about>
      </div>
    </section>
    <section class="contact">
      <div>
        <slot name="contact"></slot>
      </div>
    </section>
  </main>
</template>

<script>
import PartialAbout from '@/components/partials/PartialAbout'

export default {
  name: 'app-content-landing',
  components: {
    PartialAbout
  }
}
</script>

<style lang="sass" scoped></style>
