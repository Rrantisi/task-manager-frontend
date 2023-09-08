import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import TodosPage from '../../pages/TodosPage/TodosPage';
import CreateTodoPage from '../../pages/CreateTodoPage/CreateTodoPage';
import EditTodoPage from '../../pages/EditTodoPage/EditTodoPage';
import DeleteTodoPage from '../../pages/DeleteTodoPage/DeleteTodoPage';
import HomePage from '../../pages/HomePage/HomePage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="App bg-dark p-5 text-light">
      <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todos" element={<TodosPage isMenuOpen={isMenuOpen}/>} />
        <Route path="/todos/add" element={<CreateTodoPage/>} />
        <Route path="/todos/:id/edit" element={<EditTodoPage />} />
        <Route path="/todos/:id/delete" element={<DeleteTodoPage />} />
      </Routes>
    </main>
  );
}

export default App;
