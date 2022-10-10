/** @odoo-module **/

const { Component, useState } = owl;

import { useAutofocus } from "../../utils/hooks";
import { Todo } from "../todo/todo";

export class TodoList extends Component {
    setup() {
        this.nextId = 1;
        this.todoList = useState([]);
        useAutofocus('todoListInput');
    }
    addTodo(ev) {
        if (ev.keyCode == 13 && ev.target.value && ev.target.value.trim() != '') {
            // Add task to the list
            this.todoList.push({
                id: this.nextId++,
                description: ev.target.value.trim(),
                done: false,
            });
            // Reset some values
            ev.target.value = '';
        }
    }
    toggleTodo(id) {
        const todo = this.todoList.find((todo) => todo.id == id);
        if (todo) {
            todo.done = !todo.done;
        }
    }
    removeTodo(id) {
        const todoIndex = this.todoList.findIndex(todo => todo.id == id);
        if (todoIndex != -1) {
            this.todoList.splice(todoIndex, 1);
        }
    }
}

Object.assign(TodoList, {
    template: 'awesome_tshirt.TodoList',
    components: {
        Todo
    }
});
