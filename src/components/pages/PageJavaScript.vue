<template>
  <app-content-landing>
    <div slot="jumbotron">
      <h1>NodeJS Development</h1>
      <strong>by Experienced Developers.</strong>
    </div>
    <div slot="introduction">
      <h2>INTRODUCTION JAVASCRIPT OVERRIDE</h2>
    </div>
  </app-content-landing>
</template>

<script>
import AppContentLanding from '@/components/AppContentLanding'

export default {
  name: 'page-javascript',
  components: {
    AppContentLanding
  },
  metaInfo: {
    title: 'JavaScript Developers'
  }
}
</script>

<style lang="sass" scoped></style>
