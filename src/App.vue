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

<style src="./App.sass" lang="sass"></style>
