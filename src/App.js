import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div>
      <Sidebar />
      <div>
        <Dashboard />
      </div>

    </div>

    
  );
}

export default App;
