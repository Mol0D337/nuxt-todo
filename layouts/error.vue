<template lang="pug">
  .error-wrapper
    h1.title.h1 no such page exists
    nuxt-link.link.link-error(to='/', tag='div') home
</template>

<script>
  export default {
    name: "error"
  }
</script>

<style scoped lang="sass">
  .error-wrapper
    min-height: calc(100vh - 55px)
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

  .title
    text-transform: uppercase
    color: rgba(55,55,55, .9)
    margin-bottom: 40px

  .link-error
    text-align: center
    border-bottom: 1px solid #4d4d4d

  .link-error:hover
    border-bottom: 1px solid #000
</style>
