<template lang="pug">
  .inner(:class="isPopup ? 'popup-wrapper' : '' ", ref='popupWrap')
    .wrapper-form(v-if='isPopup')
      form(@submit.prevent='addTodo')
        .input-field
          input.input(type='text', maxlength="60", v-model='title', required='', placeholder='Title')
        .textarea-field
          textarea.textarea(v-model='description', required='' placeholder='Description', maxlength='1024')
          .counter {{description.length}}/1024
        .btn-wrapper
          button.custom-btn.btn-14.btn(@click='closePopup', type='button') cancel
          button.custom-btn.btn-15.btn(type='submit') add todo
    button.custom-btn.btn-6.btn.btn-n(v-else='', @click='showPopup')
      span Create Task

</template>

<script>
  export default {
    name: "PopupCreateTodo",
    data() {
      return {
        isPopup: false,
        title: '',
        description: ''
      }
    },
    mounted() {
      let vm = this;
      document.addEventListener('click', function (item) {
        if (item.target === vm.$refs['popupWrap']) {
          vm.closePopup();
        }
      })
    },
    methods: {
      addTodo() {
        if (this.title) {
          const task = {
            title: this.title,
            description: this.description,
            id: Date.now(),
            status: 'active',
          };
          this.$store.dispatch('CREATE_TASK', task);
          this.title = '';
          this.description = '';
          this.closePopup()
        }
      },
      showPopup() {
        this.isPopup = true;
      },
      closePopup() {
        this.isPopup = false;
      },
    },
  }
</script>

<style scoped lang="sass">
  .btn-wrapper
    text-align: center

  .counter
    display: flex
    justify-content: flex-end

  .popup-wrapper
    background: rgba(0, 0, 0, .85)
    z-index: 999
    width: 100vw
    height: 100vh
    position: fixed
    top: 0
    left: 0

  .btn-n
    text-align: center
    margin: 70px 0

  .inner
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
    .input
      width: 315px

    .textarea
      max-width: 315px
      min-width: 315px

    .wrapper-form
      padding: 20px

</style>
