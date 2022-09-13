import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import FormTutorial from './components/FormTutorial';
import Home from './pages/Home';
import TutorialsList from './components/TutorialsList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<FormTutorial />} />
        <Route path="/tutorials" element={<TutorialsList />} />

      </Routes>

    </div>
  )
}

export default App
