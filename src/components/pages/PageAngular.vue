<template>
  <app-content-landing>
    <div slot="jumbotron">
      <h1>Our experienced AngularJS developers</h1>
      <strong>tackle the most complex challenges</strong>
    </div>
    <div slot="introduction">
      <h2>INTRODUCTION ANGULAR OVERRIDE</h2>
    </div>
  </app-content-landing>
</template>

<script>
import AppContentLanding from '@/components/AppContentLanding'

export default {
  name: 'page-angular',
  components: {
    AppContentLanding
  },
  metaInfo: {
    title: 'Angular Developers'
  }
}
</script>

<style lang="sass" scoped></style>
