import React from 'react'
import Layout from './HOC/Layout'
import { Routes, Route } from "react-router-dom"
import Home from './Home'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Courses from './Pages/Courses'
import Page from './Pages/Page'
import Instructor from './Pages/Instructor.'



function App() {
  return (
    <>
      <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cources' element={<Courses />} />
        <Route path='/page' element={<Page />} />
        <Route path='/instructor' element={<Instructor />} />
      
      </Routes>
      </Layout>
    </>
  )
}
export default App
