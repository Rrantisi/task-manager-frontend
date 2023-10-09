import React, { useEffect, useState } from 'react';
import * as todosAPI from '../../utilities/todos-api';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditTodoPage({ user }) {
    const [message, setMessage] = useState('');
    const { id } = useParams();
    const userId = user._id;
    const navigate = useNavigate();
  
    const [todo, setTodo] = useState({
        todo_description: '',
        todo_responsible: '',
        todo_priority: '',
        todo_completed: false
      });

    useEffect(() => {
        async function fetchTodo() {
          try {
            const fetchedTodo = await todosAPI.getTodo(id, userId);
            setTodo({ 
              ...fetchedTodo, // Spread the fetchedTodo object to update the state
            });
          } catch (error) {
            console.error(error);
          }
        }
        fetchTodo();
    }, [id, userId]);

    const onChangeTodoDescription = (e) => {
        setTodo(prevState => ({
          ...prevState,
          todo_description: e.target.value
        }));
    }

    const onChangeTodoResponsible = (e) => {
        setTodo(prevState => ({
          ...prevState,
          todo_responsible: e.target.value
        }));
    }

    const onChangeTodoPriority = (e) => {
        setTodo(prevState => ({
          ...prevState,
          todo_priority: e.target.value
        }));
    }

    const onChangeTodoCompleted = (e) => {
        setTodo(prevState => ({
          ...prevState,
          todo_completed: !prevState.todo_completed
        }));
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedTodo = {
                todo_description: todo.todo_description,
                todo_responsible: todo.todo_responsible,
                todo_priority: todo.todo_priority,
                todo_completed: todo.todo_completed,
              };
            await handleUpdateTodo(id, userId, updatedTodo);
            setMessage('Todo updated successfully');
            setTimeout(() => {
              navigate('/todos');
            }, 1000)
        } catch (error) {
            setMessage('Failed to update todo');
            console.error(error);
        }
    }

    async function handleUpdateTodo(todoId, userId, todoData ) {
        setTodo({
            todo_description: todoData.todo_description,
            todo_responsible: todoData.todo_responsible,
            todo_priority: todoData.todo_priority,
            todo_completed: todoData.todo_completed
        });
        await todosAPI.updateTodo(todoId, userId, todoData)
      }
    
      return (
        <div style={{ marginTop: 80 }}>
          <h3 align="center">Update Todo</h3>
          {message && <p>{message}</p>}
          <form onSubmit={onSubmit}>
            <div className="form-group"> 
              <label>Description: </label>
              <input
                type="text"
                className="form-control"
                value={todo.todo_description}
                onChange={onChangeTodoDescription}
              />
            </div>
            <div className="form-group">
              <label>Responsible: </label>
              <input
                type="text"
                className="form-control"
                value={todo.todo_responsible}
                onChange={onChangeTodoResponsible}
              />
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
            <div className="form-check">
              <input
                className="form-check-input"
                id="completedCheckbox"
                type="checkbox"
                name="completedCheckbox"
                onChange={onChangeTodoCompleted}
                checked={todo.todo_completed}
                value={todo.todo_completed}
              />
              <label className="form-check-label" htmlFor="completedCheckbox">
                Completed
              </label>
            </div>
    
            <br />
    
            <div className="form-group">
              <input type="submit" value="Update Todo" className="btn btn-warning" />
            </div>
          </form>
        </div>
      );
}
    