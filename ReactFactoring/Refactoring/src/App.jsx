import IntroPage from './pages/IntroPage';
import HomePage from './pages/HomePage';
import ProjectOne from './pages/ProjectOne';
import ProjectTwo from './pages/ProjectTwo';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<IntroPage />} />
      <Route path='/Home' element={<HomePage />} />
      <Route path='/ProjectOne' element={<ProjectOne />} />
      <Route path='/ProjectTwo' element={<ProjectTwo />} />
    </Routes>
  );
}

export default App;
