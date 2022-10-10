/** @odoo-module **/

const { Component, useState } = owl;

export class Todo extends Component {
    setup() {
        // this.todo = useState({ id: this.props.id, description: "buy milk", done: false });
        console.log("todo loaded");
    }
}

Object.assign(Todo, {
    template: 'awesome_tshirt.Todo',
    props: {
        id: { type: Number },
        description: { type: String },
        done: { type: Boolean },
        toggleState: { type: Function },
    },
});
