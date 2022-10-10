/** @odoo-module **/

const { Component, useState } = owl;

export class Todo extends Component {
    toggleState() {
        this.props.toggleState(this.props.id);
    }
    removeTodo() {
        this.props.removeTodo(this.props.id);
    }
}

Object.assign(Todo, {
    template: 'awesome_tshirt.Todo',
    props: {
        id: { type: Number },
        description: { type: String },
        done: { type: Boolean },
        toggleState: { type: Function },
        removeTodo: { type: Function },
    },
});
