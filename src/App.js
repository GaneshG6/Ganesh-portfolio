import { useState, Suspense } from 'react';
import './App.css'
import { About, Contact, Footer, Home, Main, NavBar, Project } from './Module';
import { Route, Routes } from "react-router-dom";


function App() {
 return (
  <Suspense fallback = {<BigSpinner/>}>
  <Routes>
    <Route path='/' element = {<Main/>} />
    <Route path='/Ganesh-portfolio' element = {<Main/>}/>
    <Route  path='/about' element = {<About/>}/>
    <Route path='/project' element = {<Project/>}/>
    <Route path='/contact' element = {<Contact/>}/>
  </Routes>
  </Suspense>
 )
}
function BigSpinner() {
  return (
    <div className="glimmer-panel">
    <div className="glimmer-line" />
    <div className="glimmer-line" />
    <div className="glimmer-line" />
  </div>
  )
}

export default App;