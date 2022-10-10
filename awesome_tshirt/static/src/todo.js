/** @odoo-module **/

const { Component, useState } = owl;

export class Todo extends Component {
    setup() {
        this.todo = useState({ id: 3, description: "buy milk", done: false });
        console.log("todo loaded");
    }

    toggleTask() {
        this.todo.done = !this.todo.done;
    }
}

Object.assign(Todo, {
    template: 'awesome_tshirt.Todo',
});
