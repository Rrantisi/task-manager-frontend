import React, { useState } from 'react';
import * as todoAPI from '../../utilities/todos-api';
import './CreateTodoPage.css';

export default function CreateTodoPage() {
    const [message, setMessage] = useState('');
    const [todo, setTodo] = useState({
        todo_description: '',
        todo_responsible: '',
        todo_priority: '',
        todo_completed: false
    });

    const onChangeTodoDescription = (e) => {
        setTodo({
        ...todo,
        todo_description: e.target.value
        });
    };

    const onChangeTodoResponsible = (e) => {
        setTodo({
        ...todo,
        todo_responsible: e.target.value
        });
    };

    const onChangeTodoPriority = (e) => {
        setTodo({
        ...todo,
        todo_priority: e.target.value
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await handleAddTodo(todo);
            setMessage('Todo added successfully');
            setTodo({
                todo_description: '',
                todo_responsible: '',
                todo_priority: '',
                todo_completed: false
            });  
        } catch (error) {
            setMessage('Failed to add new todo');
            console.error(error);
        }
    }

    async function handleAddTodo(todoData){
        const todo = await todoAPI.addTodo(todoData);
        setTodo(todo);
    }

    return (
        <div className='form-wrapper col-lg-4 col-md-2 col-sm-2' style={{ marginTop: 80 }}>
        <h3 className="pb-3">Add a New Task</h3>
        {message && <p>{message}</p>}
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Description: </label>
                <div>
                    <input
                        type="text"
                        className="form-control border-warning-subtle border-1 bg-dark p-4 mt-3 mb-3 text-white"
                        value={todo.todo_description}
                        onChange={onChangeTodoDescription}
                    />
                </div>
            </div>
            <div className="form-group">
                <label>Responsible: </label>
                <div>
                    <input
                    type="text"
                    className="form-control border-warning-subtle border-1 bg-dark p-4 mt-3 mb-3 text-white"
                    value={todo.todo_responsible}
                    onChange={onChangeTodoResponsible}
                    />
                </div>
            </div>
            <div className="form-group">
            <div className="form-check form-check-inline">
                <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={todo.todo_priority === 'Low'}
                onChange={onChangeTodoPriority}
                />
                <label className="form-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
                <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={todo.todo_priority === 'Medium'}
                onChange={onChangeTodoPriority}
                />
                <label className="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
                <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="High"
                checked={todo.todo_priority === 'High'}
                onChange={onChangeTodoPriority}
                />
                <label className="form-check-label">High</label>
            </div>
            </div>

            <div className="form-group">
            <input type="submit" value="Add Task" className="btn btn-warning mt-4 ps-4 pe-4" />
            </div>
        </form>
        </div>
    );
}
