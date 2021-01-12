import Vue from 'vue'

export default {

  CREATE_TASK(state, task){
    state.tasks.push(task);
  },
  REMOVE_TASK(state, index){
    Vue.delete(state.tasks, index)
  },
  DELETE_TASK(state, id){
    const index = state.tasks.indexOf(id);
    state.tasks.splice(index, 1)
  },
  UPDATE_TASK(state, {id, description, title}) {
    const tasks = state.tasks.concat();

    const idx = tasks.findIndex(t => t.id === id);
    const task = tasks[idx];

    tasks[idx] = {...task, title, description,};

    state.tasks = tasks;
  },
  COMPLETE_TASK(state, id) {
    const idx = state.tasks.findIndex(t => t.id === id);
    state.tasks[idx].status = 'completed';
  },
  COM_TASK(state, index) {
    state.tasks[index].status = 'completed';
  },
}
