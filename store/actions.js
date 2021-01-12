import Vue from 'vue'

export default {
  CREATE_TASK({commit}, task) {
    commit('CREATE_TASK', task)
  },
  REMOVE_TASK({commit}, index) {
    commit('REMOVE_TASK', index)
  },
  DELETE_TASK({commit}, id) {
    commit('DELETE_TASK', id)
  },
  UPDATE_TASK({commit}, task) {
    commit('UPDATE_TASK', task)
  },
  COMPLETE_TASK({commit}, id) {
    commit('COMPLETE_TASK', id)
  },
  COM_TASK({commit}, index) {
    commit('COM_TASK', index)
  }
}
