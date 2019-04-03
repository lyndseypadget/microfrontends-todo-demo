Vue.component('lion-deletetask', {
  props: ['deletetask-todos', 'deletetask-todo'],
  methods: {
    removeTodo: function (taskToDelete) {
      if (taskToDelete!=this.deletetaskTodo) { return; } // if not deleting self, return
      var index = this.deletetaskTodos.indexOf(taskToDelete);
      this.deletetaskTodos.splice(index, 1);
      this.$emit('new-todos', this.deletetaskTodos);
    }
  },
  created: function() {
    this.$parent.$on('deleteTask', this.removeTodo);
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

Vue.component('lion-helloworld', {
  template: '<div class="lion nice-font">Hello world</div>'
})
