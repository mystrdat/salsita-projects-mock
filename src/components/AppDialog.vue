<template>
  <dialog-container>
    modal dialog
  </dialog-container>
</template>

<script>
export default {
  name: 'app-dialog'
}
</script>

<style lang="sass" scoped>
@import ../styles/shared

dialog-container
  +fix(0 $headerHeight 0 0)
  display: block
  background-color: rgba(0,0,0,0.8)
  z-index: 1000

  +media('<tablet')
    top: $headerHeightMobile
</style>
