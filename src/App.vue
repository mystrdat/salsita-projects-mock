<template>
  <app-container v-bind:class="viewClass">
    <view-container>
      <app-header></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
    </view-container>
    <portal-target name="app-root"></portal-target>
  </app-container>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

const skrollr = (process.browser) && require('skrollr')
let s // skrollr instance

export default {
  name: 'App',
  watch: {
    '$route' () {
      this.setViewClass(this.$route.matched)
      skrollr.get() && setTimeout(() => s.refresh(), 0)
    }
  },
  components: {
    AppHeader,
    AppFooter
  },
  mounted () {
    this.setViewClass(this.$route.matched)
    if (process.browser) {
      this.manageSkrollr()
      window.addEventListener('resize', this.manageSkrollr)
    }
  },
  data () {
    return {
      viewClass: 'home'
    }
  },
  methods: {
    setViewClass (matchedRoutes) {
      console.log(matchedRoutes)
      this.viewClass = Array.from(matchedRoutes).reduce((chain, route) => {
        if (route.name) {
          return chain + ` ${route}`
        }
      })
    },
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
  position: relative

view-container
  display: block

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
