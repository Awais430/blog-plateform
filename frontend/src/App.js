import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import "./App.css"
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Project from './pages/Project'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/about' element={<About/>}/>
      <Route  path='/sign-in' element={<SignIn/>}/>
      <Route  path='/sign-up' element={<SignUp/>}/>
      <Route  path='/projects' element={<Project/>}/>
      {/* <Route  path='/' element={<About/>}/> */}

    </Routes>
    </BrowserRouter>
  )
}

export default App