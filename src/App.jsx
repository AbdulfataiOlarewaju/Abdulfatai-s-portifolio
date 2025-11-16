import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
import Home from './pages/home'
import Archieves from './pages/archives'
import "./index.css";
import { Toaster } from 'sonner'



function App() {
 

  return (
    <div className='flex flex-col overflow-hidden max-width: 100vw  bg-white'>
       <Toaster position="top-left" />
      <Routes>
       
        <Route path='/' element={<Layout/>}>
        <Route path='home' element={<Home/>}/>
        <Route path='archived' element={<Archieves/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
