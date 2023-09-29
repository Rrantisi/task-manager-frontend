import { Link } from 'react-router-dom';
import './Todo.css'

export default function Todo({ todo }){
    return (
        <tr>
            <td id='custom-task' className= {`bg-transparent shadow text-white custom-border ${todo.todo_completed ? 'completed' : ''}`}>{todo.todo_description}</td>
            <td id='custom-task' className= {`bg-transparent shadow text-white custom-border ${todo.todo_completed ? 'completed' : ''}`}>{todo.todo_responsible}</td>
            <td id='custom-task' className= {`bg-transparent shadow text-white custom-border ${todo.todo_completed ? 'completed' : ''}`}>{todo.todo_priority}</td>
            <td id='custom-task' className='bg-transparent shadow text-white custom-border'>
                {/* <Link to={todo._id + "/edit/"} state={{todo}}>Edit</Link> */}
            </td>
            <td className='bg-transparent shadow text-white custom-border'>
                <Link to={todo._id + "/edit/"} state={{todo}} className='text-warning text-decoration-none'>Edit</Link>
                &nbsp; | &nbsp;
                <Link to={todo._id + "/delete/"} state={{todo}} className='text-warning text-decoration-none'>Delete</Link>
            </td>
        </tr>
    )
}