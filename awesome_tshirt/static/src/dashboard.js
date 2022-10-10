/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Counter } from "./counter";
import { Todo } from "./todo";

const { Component, useState } = owl;

class AwesomeDashboard extends Component {
    setup() {
        console.log("Awesome Dashboard is loaded!!!");
    }
}
Object.assign(AwesomeDashboard, {
    template: 'awesome_tshirt.clientaction',
    components: {
        Counter,
        Todo
    }
});

registry.category("actions").add("awesome_tshirt.dashboard", AwesomeDashboard);
