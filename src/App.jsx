import { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/home'
import "./index.css";
import { Toaster } from 'sonner'
import Header from './components/header';
import Footer from './components/footer';
import About from './pages/about';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Testimonial from './pages/testimonials';
import Contact from './pages/contact';
import NotFound from './pages/not-found-page';
import Services from './pages/service';
import Sidebar from './components/sidebar';

// ...existing code...
function App() {
  return (
    <div className='flex flex-col w-screen bg-white dark:bg-[#000000a2]'>
      <Toaster position="top-left" />
      <Header/>
      <Sidebar/>
      <Routes>
       <Route path='/'  element={<Home />} />
       <Route path='/about' element={<About />} />
       <Route path='/projects' element={<Projects />} />
       <Route path='/services' element={<Services />} />
       <Route path='/skills' element={<Skills />} />
       <Route path='/testimonials' element={<Testimonial />} />
       <Route path='/contact' element={<Contact />} />
       <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
// ...existing code...