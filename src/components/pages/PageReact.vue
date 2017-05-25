<template>
  <main>
    <h1>{{ msg }}</h1>
  </main>
</template>

<script>
export default {
  name: 'page-react',
  metaInfo: {
    title: 'REACT'
  },
  data () {
    return {
      msg: 'Welcome to React page!'
    }
  }
}
</script>

<style lang="sass" scoped></style>
