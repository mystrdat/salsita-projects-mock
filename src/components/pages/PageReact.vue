<template>
  <app-content-landing>
    <div slot="jumbotron">
      <h1>Need React and Redux Developers?</h1>
      <strong>Salsita is the World's premiere React consultancy.</strong>
    </div>
    <div slot="introduction">
      <h2>INTRODUCTION REACT OVERRIDE</h2>
      <router-link to="/react">React</router-link>
      <router-link to="projects" append>Projects</router-link>
    </div>
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
    title: 'React Developers'
  }
}
</script>

<style lang="sass" scoped></style>
