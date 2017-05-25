<template>
  <app-content-landing>
    <h1 slot="jumbotron">{{ msg }}</h1>
  </app-content-landing>
</template>

<script>
import AppContentLanding from '@/components/AppContentLanding'

export default {
  name: 'page-react',
  components: {
    AppContentLanding
  },
  metaInfo: {
    title: 'REACT'
  },
  data () {
    return {
      msg: 'Welcome to REACT!'
    }
  }
}
</script>

<style lang="sass" scoped></style>
