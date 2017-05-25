<template>
  <app-content-landing>
    <h1 slot="jumbotron">{{ msg }}</h1>
    <span slot="introduction" v-if="$mq.resize && $mq.below('600px')">MQ width < 600px</span>
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
