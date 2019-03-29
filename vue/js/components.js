Vue.component('lion-deletetask', {
  props: ['todos', 'todo'],
  methods: {
    removeTodo: function (todo) {
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    }
  },
  template: '<button class="destroy lion" @click="removeTodo(todo)"></button>'
})
