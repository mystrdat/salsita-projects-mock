<template>
  <section class="about">
    <div>
      <h2 data-0="opacity: 0" data-100="opacity: 1">About Salsita</h2>
      <h3>Embracing complex challenges</h3>
      <p>We’ve assembled a hand-picked team of university-educated computer scientists who thrive on complex projects. But we offer more than software engineers: we have an interdisciplinary team of specialists under one roof, from graphic design and user experience through HTML/CSS and full stack development to quality assurance and dev ops. Our engineers can augment an existing project team or handle an entire project from wireframing to deployment.</p>
      <p>When you hire Salsita, you get more than an individual: you get the support of a full-service team and our tried-and-true Salsita Development Process to guide your project from start to finish.</p>
      <p>For the price of one engineer, we deliver the dependability, breadth of skills and consistent quality of a world-class team.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'partial-about'
}
</script>

<style lang="sass" scoped>
@import ../../styles/shared

.about
  > div
    padding-right: 30vw

    +media('<desktop')
      padding-right: 10vw

    +media('<tablet')
      padding-right: 1.5*$base

  background: #f8f8f8 url(../../assets/img/bg-about-salsita.jpg) right top / auto 100% no-repeat

  +media('<=mobile')
    background-image: none

  h3
    color: #aaa

    +media('<=mobile')
      text-align: center

  p
    +media('<=desktop', '>mobile')
      background-color: rgba(255, 255, 255, 0.6)
      padding: 2*$base

    +media('<=desktop', '>tablet')
      margin-left: -2*$base
</style>
