import React, { useState, useEffect } from 'react';
import Todo from '../../components/Todo/Todo';
import * as todosAPI from '../../utilities/todos-api';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './TodosPage.css'

export default function TodosPage({isMenuOpen}) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const todos = await todosAPI.getAll();
      setTodos(todos);
    }
    getTodos();
  }, []);

  const todoList = todos.map((todo) => (
    <Todo todo={todo} key={todo._id} />
  ));

//   const columnWidthClass = isMenuOpen ? 'col-lg-9 col-md-8' : 'col-lg-12 col-md-12';
//   console.log('isMenuOpen prop in TodosPage:', isMenuOpen);

  return (
    <div className="col-md-12 col-lg-12 col-sm-12" style={{ marginTop: 80 }}> 
        <div className="row"> 
            <div> 
                <div className="todospage-div"> 
                    <h3 className="heading">Task Dashboard</h3>
                    <table className="table table-striped table-warning text-muted"> 
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Responsible</th>
                                <th>Priority</th>
                                <th>Category</th>
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
