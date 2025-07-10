import React from 'react'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <>
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
        
    </>
  )
}

export default App