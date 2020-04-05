import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { task: "" }
    }

    handleChange = (evt) => {
        this.setState({ task: evt.target.value });
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const todo = { id: uuidv4(), task: this.state.task, completed: false };
        this.props.addTodo(todo);
        this.setState({ task: "" });
    }

    render() {
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="task">New Todo</label>
                <input
                    id="task"
                    type="text"
                    placeholder="New Todo"
                    autoComplete="off"
                    value={this.state.task}
                    onChange={this.handleChange}
                >
                </input>
                <button>ADD TODO</button>
            </form>
        )
    }
}

export default NewTodoForm;