<template>
  <main>
    <section class="jumbotron">
      <slot name="jumbotron"></slot>
      <parallax-container v-bind="skrollrParallax"></parallax-container>
    </section>
    <section class="introduction">
      <div>
        <slot name="introduction">
          INTRODUCTION DEFAULT SLOT
          <router-link to="/react">React</router-link>
          <router-link to="/react/projects">React Projects</router-link>
        </slot>
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
    <portal to="app-root">
      <transition name="dialog">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </portal>
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
  },
  data () {
    return {
      skrollrParallax: {
        'data-top': 'transform: translateY(0px)',
        'data-top-bottom': 'transform: translateY(250px)'
      }
    }
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

.jumbotron
  +clearfix
  min-height: 250px
  position: relative
  color: #fff
  overflow: hidden // keeps the parallax under fold

  > div
    position: relative
    margin-top: $headerHeight
    padding-top: 100px
    padding-bottom: 100px
    z-index: 1

    +media('>desktop')
      padding-right: 300px

    +media('<=tablet')
      padding-top: 70px
      padding-bottom: 70px
      margin-top: $headerHeightMobile
      text-align: center

    +media('<=mobile')
      padding-top: 50px
      padding-bottom: 50px

  parallax-container
    +abs(fill)
    display: block
    background-repeat: no-repeat
    background-size: cover
    background-position-x: 50%
    will-change: transform
    background-image: url(../assets/img/bg-jumbotron-javascript.jpg) // default

    // Backgrounds
    .view-react &
      background-image: url(../assets/img/bg-jumbotron-react.jpg)

    .view-angular &
      background-image: url(../assets/img/bg-jumbotron-angular.jpg)

    .view-javascript &
      background-image: url(../assets/img/bg-jumbotron-javascript.jpg)

  h1
    position: relative
    margin: 80px 0 3*$base 0
    font-size: $fontXXXL
    font-weight: $fontRegular

    +media('<=mobile')
      font-size: $fontXXL

    &:before
      +pseudo
      +abs(left 0)
      bottom: calc(100% + 30px)
      height: 50px // fill the h1 margin-top
      width: 100%
      background: left 50% no-repeat
      background-size: contain
      background-image: url(../assets/img/logo-nodejs.png) // default

      +media('<=tablet')
        background-position: 50%

      // Page icons
      .view-react &
        background-image: url(../assets/img/logo-react.png)

      .view-angular &
        background-image: url(../assets/img/logo-angular.png)

      .view-javascript &
        background-image: url(../assets/img/logo-nodejs.png)

  strong
    display: block
    margin: 0
    font-size: $fontXL
    font-weight: $fontRegular

    +media('<=mobile')
      font-size: $fontL

</style>
