<template>
  <app-content-landing>
    <h1 slot="jumbotron">{{ msg }}</h1>
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
    title: 'HOME'
  },
  data () {
    return {
      msg: 'Welcome to Homepage!'
    }
  }
}
</script>

<style lang="sass" scoped></style>
