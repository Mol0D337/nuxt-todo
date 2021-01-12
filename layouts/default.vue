<template lang="pug">
  .wrapper
    NavBar
    .container
      Nuxt
</template>

<script>
  import NavBar from "../components/NavBar";
  export default {
    components: {NavBar}
  }
</script>

<style lang="sass">
  *
    margin: 0
    padding: 0
    box-sizing: border-box

  body
    margin: 0 auto
    overflow-x: hidden

</style>
