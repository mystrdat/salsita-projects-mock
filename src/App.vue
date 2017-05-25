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
</style>
