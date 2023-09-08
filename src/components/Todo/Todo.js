import { Link } from 'react-router-dom';

export default function Todo({ todo }){
    return (
        <tr>
            <td className= {todo.todo_completed ? 'completed' : ''}>{todo.todo_description}</td>
            <td className= {todo.todo_completed ? 'completed' : ''}>{todo.todo_responsible}</td>
            <td className= {todo.todo_completed ? 'completed' : ''}>{todo.todo_priority}</td>
            <td>
                <Link to={todo._id + "/edit/"} state={{todo}}>Edit</Link>
            </td>
            <td>
                <Link to={todo._id + "/delete/"} state={{todo}}>Delete</Link>
            </td>
        </tr>
    )
}