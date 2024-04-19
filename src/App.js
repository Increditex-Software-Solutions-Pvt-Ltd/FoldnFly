import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import AllRoute from './AllRoute';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
       <Navbar/>
       <AllRoute/>
       <Footer/>
    </>
  )
}

export default App