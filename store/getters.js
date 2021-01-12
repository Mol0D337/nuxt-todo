import Vue from 'vue'

export default {
  tasks: s => s.tasks,
  taskById: s => id => s.tasks.find(t => t.id === id)
}
