<template>
  <header>
    <ul>
      <li is="router-link" to="/">Home</li>
      <router-link to="/react">React</router-link>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style lang="sass" scoped>
header
  display: block
  overflow: hidden
</style>
