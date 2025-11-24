import { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Layout from './components/layout'
import Home from './pages/home'
import Archieves from './pages/archives'
import "./index.css";
import { Toaster } from 'sonner'

// ...existing code...
function App() {
  return (
    <div className='flex flex-col max-width: 100vw  bg-white dark:bg-[#081913]'>
      <Toaster position="top-left" />
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* when visiting "/" Layout renders and immediately redirects to "/home" */}
          <Route index element={<Navigate to="home" replace />} />
          <Route path='home' element={<Home />} />
          <Route path='archived' element={<Archieves />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
// ...existing code...