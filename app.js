$(document).ready(function() {
    new Vue({
        el: '#todo',
        data: {
            newTodo: '',
            todos: [
                { text: 'Take a picture' },
                { text: 'Pay bills' },
                { text: 'Get laundry' },
                { text: 'Wash car' },
                { text: 'Have some beer' }
            ]
        },
        methods: {
            add: function() {
                var todoInput = this.newTodo.trim();
                if (todoInput) {
                    this.todos.push({ text: todoInput })
                }
                this.newTodo = '';
            },
            remove: function (index) {
                this.todos.splice(index, 1)
            }
        }
    })
});
