import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import FormTutorial from './components/FormTutorial';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav className='nav-bar navbar-expand navbar-dark bg-white'>
        <a href="/" className="navbar-brand">
          bezKoder
        </a>

      </nav>
      <div>
        <Routes>
          <Route path="/" element={<FormTutorial />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
