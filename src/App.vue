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

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
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
  overflow: hidden

view-container
  display: block
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
  overflow: auto

section
  > div
    +clearfix
    padding: 10*$base 0
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
