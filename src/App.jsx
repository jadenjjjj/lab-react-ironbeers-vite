import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import BeersPage from './components/BeersPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BeerPage from './components/BeerPage'
import RandomBeerPage from './components/RandomBeerPage'
import NewBeerForm from './components/NewBeerForm'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <header className='header'>
          <a href="/" className='logo'>My Beer APP</a>
        </header>
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route exact path="/beers" element={<BeersPage />} />
        <Route exact path="/beers/:id" element={<BeerPage />}/>
        <Route exact path="/random-beer" element={<RandomBeerPage />}/>
        <Route exact path="/new-beer" element={<NewBeerForm />}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App
