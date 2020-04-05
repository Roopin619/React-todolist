import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { isEditing: false, task: this.props.task };
    }

    toggleForm = () => {
        this.setState({ isEditing: !this.state.isEditing });
    }

    handleChange = (evt) => {
        this.setState({ task: evt.target.value });
    }

    handleUpdate = (evt) => {
        evt.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({ isEditing: false });
    }

    handleToggle = () => {
        this.props.toggleTodo(this.props.id);
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div className="Todo">
                    <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                        <input
                            type="text"
                            value={this.state.task}
                            onChange={this.handleChange}
                        >
                        </input>
                        <button>Save</button>
                    </form>
                </div>
            );
        } else {
            result = (
                <div className="Todo">
                    <li
                        className={this.props.completed ? "Todo-task completed" : "Todo-task"}
                        onClick={this.handleToggle}
                    >
                        {this.props.task}
                    </li>
                    <div className="Todo-buttons">
                        <button onClick={this.toggleForm}>
                            <i class="fas fa-pen"></i>
                        </button>
                        <button onClick={() => this.props.removeTodo()}>
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            );
        }
        return result;
    }
}

export default Todo;