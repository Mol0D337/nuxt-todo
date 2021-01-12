<template lang="pug">
  .wrap
    PopupCreateTodo
    .select-wrapper
      .input-field
        select.select(ref='select', v-model='filter')
          option.counter(disabled='', selected='') Choose your option
          option.counter(value='active') Active
          option.counter(value='completed') Completed
      button.btn.custom-btn.btn-14.filter(v-if='filter', @click='filter = null') Clear
    table.todos-list(v-if='tasks.length')
      thead
        tr
          th #
          th Title
          th Description
          th Status
          th Open
          th Delete
      tbody
        tr(v-for='(task, index) in displayTasks', :key='task.id')
          td
            input(type='checkbox', v-if="task.status !== 'completed'", @click='comTask(index)')
            input(type='checkbox', v-else='', disabled='')
          td.h2.td-t
            .text {{task.title | toUpperCase}}
          td.td
            .text {{task.description | toUpperCase}}
          td {{task.status | toUpperCase}}
          td
            nuxt-link(:to="'/task/' + task.id")
              img(src='../assets/icons/edit.svg', alt='')
          td
            Popup(@removeTodo='removeTodo(index)')
    .alert(v-else='') No tasks
</template>

<script>
  import { mapGetters } from 'vuex';
  import toUpperCase from '../filters/toUpperCase'
  import PopupCreateTodo from "../components/PopupCreateTodo";
  import Popup from "../components/Popup";
  export default {
    components: {Popup, PopupCreateTodo},
    data() {
      return {
        filter: null,
      }
    },
    filters: {
      toUpperCase
    },
    computed: {
      ...mapGetters([
        'tasks',
      ]),
      displayTasks() {
        return this.tasks.filter(t => {
          if (!this.filter) {
            return true
          }
          return t.status === this.filter
        })
      },
    },
    methods: {
      removeTodo(index) {
        this.$store.dispatch('REMOVE_TASK', index);
        this.$router.push('/');
      },
      comTask(index) {
        this.$store.dispatch('COM_TASK', index);
      },
    },
  }
</script>

<style lang="sass">
  .filter
    border-radius: 6px

  .select-wrapper
    padding: 40px
    margin: 0 auto
    display: flex
    justify-content: space-evenly
    border-top: 1px solid #4d4d4d
    border-bottom: 1px solid #4d4d4d

  .alert
    margin-top: 100px

  .tasks
    border: 1px solid #ccc
    display: flex
    justify-content: space-between
    align-items: center
    padding: .5rem 2rem
    margin: 0 20px 1rem

  li
    list-style: none

  .about
    padding: 3px 5px

  img
    cursor: pointer
    margin-left: 10px

  .btn-wrapper
    text-align: center

  .td
    max-width: 250px

  .td-t
    max-width: 100px

  .todos-list
    margin: 15px 30px

  .text
    white-space: nowrap
    text-overflow: ellipsis
    overflow: hidden

  td, th
    padding: 15px 5px
    display: table-cell
    text-align: left
    vertical-align: middle
    border-radius: 2px

  tr
    border-bottom: 1px solid rgba(0,0,0,0.12)

  table
    width: 100%
    display: table
    border-collapse: collapse
    border-spacing: 0


  @media (max-width: 682px)
    .todos-list
      margin: 15px 12px 0 2px

    table
      width: 95%

    .wrapper-form
      padding: 20px

    .title
      text-align: center
      width: 300px


</style>
