Vue.component('lion-deletetask', {
  props: ['deletetask-todos', 'deletetask-todo'],
  methods: {
    removeTodo: function (deletetaskTodo) {
      var index = this.deletetaskTodos.indexOf(deletetaskTodo);
      this.deletetaskTodos.splice(index, 1);
      this.$emit('new-todos', this.deletetaskTodos);
    }
  },
  template: '<button class="destroy lion" @click="removeTodo(deletetaskTodo)"></button>'
})

Vue.component('lion-clearcompleted', {
  props: ['clearcompleted-todos'],
  methods: {
    removeCompleted: function () {
      let modifiedTodos = this.clearcompletedTodos.filter(function (todo) {
        return !todo.completed;
      });
      this.$emit('new-todos', modifiedTodos)
    }
  },
  template: '<button class="clear-completed lion" @click="removeCompleted()">Clear completed</button>'
})
