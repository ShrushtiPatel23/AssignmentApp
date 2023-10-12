import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import CreateAds from './components/CreateAds';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FillData from './components/FillData';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/createAds' element={<CreateAds />} />
          <Route path='/fillData' element={<FillData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
