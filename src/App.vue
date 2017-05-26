<template>
  <app-container>
    <view-container>
      <app-header></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
    </view-container>
  </app-container>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

const skrollr = (process.browser) && require('skrollr')
let s // skrollr instance

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  mounted () {
    if (process.browser) {
      this.manageSkrollr()
      window.addEventListener('resize', this.manageSkrollr)
    }
  },
  methods: {
    initSkrollr () {
      s = skrollr.init({
        forceHeight: false,
        smoothScrolling: false,
        mobileCheck: () => false
      })
    },
    manageSkrollr () {
      if (!skrollr.get() && this.$mq.above('768px')) {
        this.initSkrollr()
      } else if (skrollr.get() && this.$mq.below('767px')) {
        s.destroy()
      }
    }
  },
  beforeDestroy () {
    skrollr.get() && s.destroy()
  }
}
</script>

<style lang="sass">
@import 'styles/shared'
@import 'styles/base'
@import 'styles/icons'
@import 'styles/effects'
@import 'styles/controls'

app-container
  display: block
  height: 100%
  position: relative

view-container
  display: block
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0

section
  > div
    +clearfix
    padding: 10*$base 1.5*$base
    max-width: $contentMaxWidth
    margin: 0 auto

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
