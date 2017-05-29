<template>
  <app-content-landing>
    <div slot="jumbotron">
      <h1>Need React and Redux Developers?</h1>
      <strong>Salsita is the World's premiere React consultancy.</strong>
    </div>
    <div slot="introduction">
      <h2>INTRODUCTION REACT OVERRIDE</h2>
    </div>
  </app-content-landing>
</template>

<script>
import AppContentLanding from '@/components/AppContentLanding'

export default {
  name: 'page-home',
  components: {
    AppContentLanding
  },
  metaInfo: {
    title: 'Toppest Software Gore'
  }
}
</script>

<style lang="sass" scoped></style>
