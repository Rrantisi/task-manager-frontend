import React, { useState, useEffect } from 'react';
import Todo from '../../components/Todo/Todo';
import * as todosAPI from '../../utilities/todos-api';
import './TodosPage.css'

export default function TodosPage({isMenuOpen}) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const todos = await todosAPI.getAll();

      // Sort the todos based on priority
      const sortedTodos = todos.sort((a, b) => {
        const priorityValues = { High: 1, Medium: 2, Low: 3 };
        const priorityA = priorityValues[a.todo_priority];
        const priorityB = priorityValues[b.todo_priority];
        return priorityA - priorityB;
      });

      setTodos(sortedTodos);    
    }
    getTodos();
  }, []);

  const todoList = todos.map((todo) => (
    <Todo todo={todo} key={todo._id} />
  ));

  return (
    <div className="col-md-12 col-lg-12 col-sm-12" style={{ marginTop: 80 }}> 
        <div className="row"> 
            <div> 
                <div className="todospage-div"> 
                    <h3 className="heading">Task Dashboard</h3>
                    <table className="table text-muted"> 
                        <thead className='table-warning shadow-sm'>
                            <tr>
                                <th>Description</th>
                                <th>Responsible</th>
                                <th>Priority</th>
                            </tr>
                        </thead>
                        <tbody>{todoList}</tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  );
}
