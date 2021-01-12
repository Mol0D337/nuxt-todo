<template lang="pug">
  .navbar-wrapper
    ul
      li
        nuxt-link.link(tag='div', to='/', active-class='active', exact='')
          | home
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped lang="sass">
  li
    list-style: none

  .navbar-wrapper
    padding: 10px 0
    border-bottom: 1px solid #4d4d4d
    display: flex
    align-items: center
    justify-content: center


</style>
