import React, { useEffect, useState } from 'react';
import * as todosAPI from '../../utilities/todos-api';
import { useParams, useNavigate, Link } from 'react-router-dom';

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
          // Redirect to the home page or a different route after successful deletion
          navigate('/todos');
        } catch (error) {
          console.log(error);
        }
    }
    
    return (
        <div style={{ marginTop: 80 }}>
        <h3 align="center">Are you sure you want to delete the following to do?</h3>
        <h5>{todo.todo_description} - {todo.todo_responsible}</h5>
        <form onSubmit={onSubmit}>
          <Link to={"/todos"} className="btn btn-primary">Cancel</Link>
          <input type="submit" value="Delete Todo" className="btn btn-primary" />
        </form>
      </div>
      )
}