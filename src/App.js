import { useState } from 'react';
import './App.css'
import { About, Contact, Footer, Home, Main, NavBar, Project } from './Module';
import { Route, Routes } from "react-router-dom";

function App() {
 return (
  <Routes>
    <Route path='/' element = {<Main/>} />
    <Route path='/Ganesh-portfolio' element = {<Main/>}/>
    <Route  path='/about' element = {<About/>}/>
    <Route path='/project' element = {<Project/>}/>
    <Route path='/contact' element = {<Contact/>}/>
  </Routes>
 )
}

export default App;