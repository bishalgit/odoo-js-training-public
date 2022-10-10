/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Counter } from "./components/counter/counter";
import { TodoList } from "./components/todolist/todolist";

const { Component, useState } = owl;

class AwesomeDashboard extends Component {
    setup() {
        this.todos = [
            { id: 3, description: "buy milk", done: false },
            { id: 4, description: "buy eggs", done: true },
            { id: 5, description: "buy avocado", done: true },
        ];
        console.log("Awesome Dashboard is loaded!!!");
    }
}
Object.assign(AwesomeDashboard, {
    template: 'awesome_tshirt.clientaction',
    components: {
        Counter,
        TodoList
    }
});

registry.category("actions").add("awesome_tshirt.dashboard", AwesomeDashboard);
