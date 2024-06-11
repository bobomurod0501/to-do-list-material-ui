import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import BrandSection from './components/BrandSection';
import MainSection from './components/MainSection';

function App() {
  

  return (
   <div >
    <Navbar />
    <BrandSection />


    <div className="app">
    <MainSection />
    </div>

    
   </div>
  )
}

export default App
