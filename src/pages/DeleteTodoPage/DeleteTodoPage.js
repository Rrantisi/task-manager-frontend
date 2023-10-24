import React, { useEffect, useState } from 'react';
import * as todosAPI from '../../utilities/todos-api';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './DeleteTodoPage.css';

export default function DeleteTodoPage({ user }) {
    const { id } = useParams();
    const userId = user._id;
    const navigate = useNavigate();

    const [todo, setTodo] = useState({
        todo_description: '',
        todo_responsible: '',
        todo_priority: '',
        todo_completed: false,
      });

    useEffect(() => {
        async function fetchTodo() {
          try {
            const fetchedTodo = await todosAPI.getTodo(id, userId);
            setTodo({
              ...fetchedTodo,
            });
          } catch (error) {
            console.error(error);
          }
        }
        fetchTodo();
    }, [id, userId]);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
          await handleDeleteTodo(id);
        } catch (error) {
          console.log(error);
        }
    };

    async function handleDeleteTodo(todoId) {
        try {
          await todosAPI.deleteTodo(todoId);
          navigate('/todos');
        } catch (error) {
          console.log(error);
        }
    }
    
    return (
        <div align="center" style={{ marginTop: 80 }}>
        <h3>Are you sure you want to delete <span id='custom-task'>{todo.todo_description} - {todo.todo_responsible}</span></h3>
        <form onSubmit={onSubmit}>
          <input type="submit" value="Delete" className="btn btn-outline-warning mt-3 me-3"/>
          <Link to={"/todos"} className="btn btn-outline-danger mt-3">Cancel</Link>
        </form>
      </div>
      )
}