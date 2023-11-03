import { Routes, Route, Link } from 'react-router-dom';
import { TaskList } from './pages/TaskList';
import { TaskForm } from './pages/TaskForm';
import { TaskForm2 } from './pages/TaskForm2';
import './style.css';

export const App = () => {
  return (
    <>
      <nav className="nav">
        <ul className="list">
          <li className="item">
            <Link to="/">TaskList</Link>
          </li>
          <li className="item">
            <Link to="/task_form/">TaskForm</Link>
          </li>
          <li className="item">
            <Link to="/task_form/:id">TaskForm(id)</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<TaskList />}></Route>
        <Route path="/task_form" element={<TaskForm />}></Route>
        <Route path="/task_form/:id" element={<TaskForm2 />}></Route>
      </Routes>
    </>
  );
};
