/** @odoo-module **/

const { Component, useState } = owl;
const { onMounted, useRef } = owl.hooks;

import { useAutofocus } from "../../utils/hooks";
import { Todo } from "../todo/todo";

export class TodoList extends Component {
    setup() {
        this.todoList = useState([]);
        this.counter = 1;
        // this.todoInput = useRef('todoInput');
        useAutofocus('todoListInput');
        this.toggleState = this.toggleState.bind(this);
    }
    addTodo(ev) {
        if (ev.keyCode == 13 && ev.target.value && ev.target.value.trim() != '') {
            // Add task to the list
            this.todoList.push({
                id: this.counter++,
                description: ev.target.value.trim(),
                done: false,
            });
            // Reset some values
            ev.target.value = '';
        }
    }
    toggleState(id) {
        const todo = this.todoList.find((todo) => todo.id == id);
        if (todo)
            todo.done = !todo.done;
    }
}

Object.assign(TodoList, {
    template: 'awesome_tshirt.TodoList',
    components: {
        Todo
    }
});
