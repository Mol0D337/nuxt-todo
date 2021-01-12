<template lang="pug">
  div
    .inner(:class="isPopupDelete ? 'popup-wrapper' : '' ", ref='popupAlert')
      .wrapper-form(v-if='isPopupDelete')
        .btn-wrapper
          .counter.mb
            | Delete Task?
          button.custom-btn.btn-14.btn(@click='closeAlert') Cancel
          button.custom-btn.btn-15.btn(@click='deleteTask') Delete
      div(v-else='', @click='showAlert')
        button.custom-btn.btn-15.btn(type='button') Delete
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: "PopupDelete",
    data() {
      return {
        isPopupDelete: false
      }
    },
    mounted() {
      let vm = this;
      document.addEventListener('click', function (item) {
        if (item.target === vm.$refs['popupAlert']) {
          vm.closeAlert();
        }
      });
    },
    computed: {
      ...mapGetters([
        'tasks',
      ]),
      task() {
        return this.$store.getters.taskById(+this.$route.params.id)
      }
    },
    methods: {
      deleteTask() {
        this.$store.dispatch('DELETE_TASK', this.task.id);
        this.$router.push('/');
      },
      showAlert() {
        this.isPopupDelete = true;
      },
      closeAlert() {
        this.isPopupDelete = false;
      },
    },
  }
</script>

<style scoped lang="sass">

  .mb
    margin-bottom: 20px

  .btn-wrapper
    text-align: center

  .counter
    display: flex
    justify-content: center

  .popup-wrapper
    background: rgba(0, 0, 0, .85)
    z-index: 999
    width: 100vw
    height: 100vh
    position: fixed
    top: 0
    left: 0
    display: flex
    justify-content: center
    align-items: center

  .wrapper-form
    background: #ffffff
    border-radius: 10px
    padding: 40px
    display: flex
    align-items: center


  @media (max-width: 682px)
    .wrapper-form
      padding: 20px

</style>
