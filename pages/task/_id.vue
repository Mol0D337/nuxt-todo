<template lang="pug">
  .task-wrapper
    div(v-if='task')
      h1.h2 {{task.title | toUpperCase}}
      form(@submit.prevent='updateTask')
        div(v-if="task.status !== 'completed'")
          .input-field
            input.input(maxlength='60', type='text', v-model='title', required='', placeholder='Title')
          .textarea-field
            textarea.textarea(v-model='description', required='', placeholder='Description', maxlength='1024')
            .counter {{description.length}}/1024
        div(v-if="task.status === 'completed'")
          .input-field
            input.input(type='text', v-model='title', required='', disabled='', placeholder='Title')
          .textarea-field
            textarea.textarea(v-model='description', required='', disabled='', placeholder='Description', maxlength='1024')
            .counter {{description.length}}/1024
        .btn-inner(v-if="task.status !== 'completed'")
          button.custom-btn.btn-14.btn(type='submit') Update
          button.custom-btn.btn-15.btn.mb-q(type='button', @click='completeTask') Complete
          PopupDelete
        .btn-inner(v-if="task.status === 'completed'")
          nuxt-link.custom-btn.btn-14.btn.fz(to='/', tag='div')
            | home
          PopupDelete
    .alert(v-else='') Task not found
</template>

<script>
  import { mapGetters } from 'vuex';
  import toUpperCase from '../../filters/toUpperCase'
  import PopupDelete from "../../components/PopupDelete";
  export default {
    name: "index",
    components: {PopupDelete},
    data() {
      return {
        title: '',
        description: ''
      }
    },
    filters: {
      toUpperCase
    },
    computed: {
      ...mapGetters([
        'tasks',
      ]),
      task() {
        return this.$store.getters.taskById(+this.$route.params.id)
      }
    },
    mounted() {
      this.description = this.task.description;
      this.title = this.task.title;
    },
    methods: {
      updateTask() {
        this.$store.dispatch('UPDATE_TASK', {
          id: this.task.id,
          description: this.description,
          title: this.title
        });
        this.$router.push('/')
      },
      completeTask() {
        this.$store.dispatch('COMPLETE_TASK', this.task.id);
        this.$router.push('/');
      },
      deleteTask() {
        this.$store.dispatch('DELETE_TASK', this.task.id);
        this.$router.push('/');
      }
    },
  }
</script>

<style scoped lang="sass">
  .btn-inner
    margin-top: 15px
    display: flex
    justify-content: center
    align-items: baseline

  .alert
    margin-top: 100px

  .task-wrapper
    text-align: center
    margin-top: 100px

  h1
    margin-bottom: 25px

  .btn
    margin-top: 25px

  .fz
    font-size: 13px

  @media (max-width: 682px)
    .input
      width: 315px

    .textarea
      max-width: 315px
      min-width: 315px

    .wrapper-form
      padding: 20px

    .btn-inner
      margin-top: 15px
      flex-wrap: wrap

    .mb-q
      margin-bottom: 15px

</style>
