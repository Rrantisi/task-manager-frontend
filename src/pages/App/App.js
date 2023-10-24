import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import TodosPage from '../../pages/TodosPage/TodosPage';
import CreateTodoPage from '../../pages/CreateTodoPage/CreateTodoPage';
import EditTodoPage from '../../pages/EditTodoPage/EditTodoPage';
import DeleteTodoPage from '../../pages/DeleteTodoPage/DeleteTodoPage';
import HomePage from '../../pages/HomePage/HomePage';
import AuthPage from '../../pages/AuthPage/AuthPage';
import { getUser } from '../../utilities/users-service';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(getUser());

  return (
    <main className="App bg-dark p-5 text-light">
      { user ?
      <>
        <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/todos/add" element={<CreateTodoPage/>} />
          <Route path="/todos/:id/edit" element={<EditTodoPage user={user}/>} />
          <Route path="/todos/:id/delete" element={<DeleteTodoPage user={user} />} />
        </Routes>
      </>
      : 
      <AuthPage path="/" setUser={setUser} />
      }
    </main>
  );
}

export default App;
